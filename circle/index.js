
import './style/main.css'
import * as THREE from 'three' 
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('.webgl')
});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );

const scene = new THREE.Scene();


var R = 30;
var t = [];
var N = 40
var dist = (2*Math.PI)/N;
var x = 0;
var angle = 0
var points = [];

for (let i = 0; i <= N; i++) {
	x = x+dist;
	t.push(x);
	//console.log("t "+t);
}

for (let j = 0; j <= N; j++) {
angle = t[j];
var x = R*Math.cos(angle);
var y = R*Math.sin(angle);
points.push(new THREE.Vector3( x, y, 0 ));
console.log(angle, x,y);
}

const material = new THREE.LineBasicMaterial({
color: new THREE.Color('skyblue')
});

const geometry = new THREE.BufferGeometry().setFromPoints( points );

const line = new THREE.Line( geometry, material );
scene.add( line );
renderer.render( scene, camera );