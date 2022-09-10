import './style/main.css'
import * as THREE from 'three' 
import './assets/aflag.jpg'

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('.webgl')
});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );

const scene = new THREE.Scene();


let x1=0,y1 = 0,x2=2,y2= 2,dx,dy,t = 10, x, y;
var points = [];
console.log(x,y)
for (let j = 0; j <= t; j++) {
    points.push(new THREE.Vector3( x, y, 0 ));
    x=x1+(x2-x1)*j
    y=y1+(y2-y1)*j
    console.log(x,y)
  }  
  console.log(points)

const material = new THREE.LineBasicMaterial({
	color: new THREE.Color('skyblue')
});

const geometry = new THREE.BufferGeometry().setFromPoints( points );

const line = new THREE.Line( geometry, material );
scene.add( line );
renderer.render( scene, camera );


