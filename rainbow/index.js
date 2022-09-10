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

var geometry1 = new THREE.RingGeometry(55,60,60);
var material1 = new THREE.MeshLambertMaterial({color: "rgb(0, 0, 131)"});
var mesh1 = new THREE.Mesh(geometry1, material1);
mesh1.position.set(0,-45,-0.5);
scene.add(mesh1);

var geometry2 = new THREE.RingGeometry(60,65,60);
var material2 = new THREE.MeshLambertMaterial({color: "rgb(0, 155, 254)"});
var mesh2 = new THREE.Mesh(geometry2, material2);
mesh2.position.set(0,-45,-0.5);
scene.add(mesh2);

var geometry3 = new THREE.RingGeometry(65,70,60);
var material3 = new THREE.MeshLambertMaterial({color: "rgb(0, 187, 0)"});
var mesh3 = new THREE.Mesh(geometry3, material3);
mesh3.position.set(0,-45,-0.5);
scene.add(mesh3);

var geometry4 = new THREE.RingGeometry(50,55,60);
var material4 = new THREE.MeshLambertMaterial({color: "rgb(48, 0, 155)"});
var mesh4 = new THREE.Mesh(geometry4, material4);
mesh4.position.set(0,-45,-0.5);
scene.add(mesh4);



var geometry5 = new THREE.RingGeometry(70,75,60);
var material5 = new THREE.MeshLambertMaterial({color: "rgb(254, 256, 0)"});
var mesh5 = new THREE.Mesh(geometry5, material5);
mesh5.position.set(0,-45,-0.5);
scene.add(mesh5);


var geometry6 = new THREE.RingGeometry(75,80,60);
var material6 = new THREE.MeshLambertMaterial({color: "rgb(254, 98, 48)"});
var mesh6 = new THREE.Mesh(geometry6, material6);
mesh6.position.set(0,-45,-0.5);
scene.add(mesh6);


var geometry7 = new THREE.RingGeometry(80,85,60);
var material7 = new THREE.MeshLambertMaterial({color: "rgb(221, 0, 0)"});
var mesh7 = new THREE.Mesh(geometry7, material7);
mesh7.position.set(0,-45,-0.5);
scene.add(mesh7);

let lightIntensity = 1;

// Add a point light with #fff color, .7 intensity, and 0 distance
var light = new THREE.PointLight( 0xffffff, lightIntensity , 0 );

// Specify the light's position
light.position.set(100, 100, 100 );

// Add the light to the scene
scene.add(light);


function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);   
}

animate();