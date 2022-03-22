import { useRef, useEffect } from 'react'
import { PrismicRichText } from '@prismicio/react'
import { Canvas, useFrame } from 'react-ogl/web'

import MainImage from '../../public/summer-22/img/main.jpg'
import DepthImage from '../../public/summer-22/img/depth.jpg'
import BokehImage from '../../public/summer-22/img/bokeh.jpg'

import styles from './styles.module.css'

const SurftacularHeader = ({ slice }) => {
	const canvasRef = useRef()
	// function update(e) {
	// 	if (e.type == 'mousemove') {
	// 		mouse.value.set(e.offsetX / window.innerWidth, window.scrollY / window.innerHeight)
	// 	} else if (e.type == 'scroll') {
	// 		mouse.value.set(mouse.value[0], window.scrollY / window.innerHeight)
	// 	}

	function Header(props) {
		const mainTexRef = useRef()
		const depthTexRef = useRef()
		const bokehTexRef = useRef()
		const meshRef = useRef()
		const mouse = { value: [0.5, 0] }

		return (
			<mesh
				{...props}
				ref={meshRef}
				onPointerMove={({ layerX }) => {
					mouse.value = [
						layerX / window.innerWidth,
						window.scrollY / window.innerHeight
					]
					console.log(mainTexRef.current);
				}}
			>
				<geometry
					position={{ size: 2, data: new Float32Array([-1, -1, 3, -1, -1, 3]) }}
					uv={{ size: 2, data: new Float32Array([0, 0, 2, 0, 0, 2]) }}
				/>
				<program
					vertex={
						/*glsl*/ `
					attribute vec2 uv;
					attribute vec2 position;

					varying vec2 vUv;

					void main() {
						vUv = uv;
						gl_Position = vec4(position, 0, 1);
					}
					`
					}
					fragment={
						/* glsl */ `
					precision highp float;

					uniform vec2 mouse;
					uniform sampler2D mainTex;
					uniform sampler2D depthTex;

					varying vec2 vUv;

					void main() {
						float depth = texture2D(depthTex, vUv).r - .24;
						gl_FragColor = texture2D(mainTex, vUv + (vec2(- mouse.x + .5, (1. - mouse.y) - 1.) / 20.) * depth);
					}
				`
					}
					uniforms={{
						mouse,
						bokehTex: { value: bokehTexRef.current },
						mainTex: { value: mainTexRef.current },
						depthTex: { value: depthTexRef.current },
						aspect: { value: canvasRef.current.clientWidth / canvasRef.current.height },
					}}
				/>
				<texture image={MainImage} ref={mainTexRef} />
				<texture image={DepthImage} ref={depthTexRef} />
				<texture image={BokehImage} ref={bokehTexRef} />
				<post
					fragment={
						/* glsl */ `
					precision highp float;
					uniform sampler2D tMap;
					uniform sampler2D bokehTex;
					uniform sampler2D depthTex;
					uniform vec2 mouse;
					varying vec2 vUv;

					void main() {
						vec2 offset = texture2D(bokehTex, vUv).rg * .25;
						float depth = texture2D(depthTex, vUv).r - .24;
						vec4 texOff = texture2D(tMap, vUv + offset + offset * 8. * vec2(mouse.x - .5, mouse.y * .3) * depth);
						gl_FragColor = texOff;
					}
				`
					}
				/>
			</mesh>
		)
	}

	return (
		<>
			<section className={styles.headerCanvas}>
				<Canvas ref={canvasRef}>
					<Header />
				</Canvas>
			</section>
			<section>
				<PrismicRichText
					field={slice.primary.title}
					className='surftacular-opening-heading'
				/>
				<PrismicRichText
					field={slice.primary.openingParagraph}
					className='surftacular-opening-paragraph'
				/>
			</section>
		</>
	)
}

export default SurftacularHeader
