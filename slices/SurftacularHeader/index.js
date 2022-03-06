import { useRef, useEffect } from 'react'
import { PrismicRichText } from '@prismicio/react'
// import { MeshProps, useFrame, Canvas } from 'react-ogl/web'
// import * as OGL from 'ogl'
// import MainImage from '../../public/summer-22/img/main.jpg'
// import DepthImage from '../../public/summer-22/img/depth.jpg'
// import BokehImage from '../../public/summer-22/img/bokeh.jpg'


const Component = ()=>{
	return (
		<div>This is a WIP because react-ogl was giving us troubles.</div>
	)
}

// const SurftacularHeader = ({ slice }) => {
// 	let renderer
// 	const canvasRef = useRef()

// 	// function update(e) {
// 	// 	if (e.type == 'mousemove') {
// 	// 		mouse.value.set(e.offsetX / window.innerWidth, window.scrollY / window.innerHeight)
// 	// 	} else if (e.type == 'scroll') {
// 	// 		mouse.value.set(mouse.value[0], window.scrollY / window.innerHeight)
// 	// 	}
// 	// 	// requestAnimationFrame(update);
// 	// 	renderer.render({ scene: mesh })
// 	// 	bokeh.render({ scene: mesh })
// 	// }

// 	// function resize() {
// 	// 	renderer.setSize(window.innerWidth, window.innerWidth / 1.7777777778);
// 	// 	bokeh.resize()
// 	// 	renderer.render({ scene: mesh })
// 	// 	bokeh.render({ scene: mesh })
// 	// }

// 	function Header (props) {
// 		const mainTexRef = useRef()
// 		const depthTexRef = useRef()
// 		const bokehTexRef = useRef()

// 		return (
// 			<mesh
// 				{...props}
// 			>
// 				<texture image={MainImage} ref={mainTexRef} />
// 				<texture image={DepthImage} ref={depthTexRef} />
// 				<texture image={BokehImage} ref={bokehTexRef} />
// 				<program
// 					vertex={ /*glsl*/`
// 					attribute vec2 uv;
// 					attribute vec2 position;

// 					varying vec2 vUv;

// 					void main() {
// 						vUv = uv;
// 						gl_Position = vec4(position, 0, 1);
// 					}
// 					`
// 					}
// 					fragment={/* glsl */`
// 					precision highp float;

// 					uniform vec2 mouse;
// 					uniform sampler2D mainTex;
// 					uniform sampler2D depthTex;

// 					varying vec2 vUv;

// 					void main() {
// 						float depth = texture2D(depthTex, vUv).r - .24;
// 						gl_FragColor = texture2D(mainTex, vUv + (vec2(- mouse.x + .5, (1. - mouse.y) - 1.) / 20.) * depth);
// 					}
// 				`}
// 					uniforms={{
// 						mouse,
// 						bokehTex: {
// 							value: bokehTex
// 						},
// 						mainTex: { value: mainTexRef },
// 						depthTex: { value: depthTexRef },
// 					}}
// 				/>
// 				<post
// 					fragment={ /* glsl */`
// 					precision highp float;
// 					uniform sampler2D tMap;
// 					uniform sampler2D bokehTex;
// 					uniform sampler2D depthTex;
// 					uniform vec2 mouse;
// 					varying vec2 vUv;

// 					void main() {
// 						vec2 offset = texture2D(bokehTex, vUv).rg * .25;
// 						float depth = texture2D(depthTex, vUv).r - .24;
// 						vec4 texOff = texture2D(tMap, vUv + offset + offset * 8. * vec2(mouse.x - .5, mouse.y * .3) * depth);
// 						gl_FragColor = texOff;
// 					}
// 				`}
// 				/>
// 			</mesh >)
// 	}

// 	return (
// 		// <>
// 		// 	<section>
// 		// 		<div id="surftacular-header" ref={containerRef}>
// 		// 			{/* <img
// 		// 				className="main"
// 		// 				src="/summer-22/img/main.jpg"
// 		// 				alt="Alex Trost and his trusty horse companion Neighthan shredding some mean waves in a sundown."
// 		// 				ref={mainImageRef}
// 		// 			/>
// 		// 			<img className="bokeh hidden" src="/summer-22/img/bokeh.jpg" alt="" ref={bokehRef} />
// 		// 			<img className="depth hidden" src="/summer-22/img/depth.jpg" alt="" ref={depthRef} /> */}
// 		// 			<img className="logo" src="/summer-22/img/logo.svg" alt="" />
// 					<Canvas ref={canvasRef} className="header-canvas">
// 						<Header />
// 					</Canvas>
// 		// 		</div>
// 		// 	</section>
// 		// 	<section>
// 		// 		<PrismicRichText field={slice.primary.title} className="surftacular-opening-heading" />
// 		// 		<PrismicRichText field={slice.primary.openingParagraph} className="surftacular-opening-paragraph" />
// 		// 	</section>
// 		// </>
// 	)
// }

export default Component