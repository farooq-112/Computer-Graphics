import './style/main.css'
import * as THREE from 'three'
import './assets/aflag.jpg'

/**
 * Sizes
 */
const sizes = {}
sizes.width = window.innerWidth
sizes.height = window.innerHeight

window.addEventListener('resize', () =>
{
    // Save sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
})

/**
 * Environnements
 */
// Scene
const scene = new THREE.Scene()

//Image
const texture = new THREE.TextureLoader().load('https://media.istockphoto.com/vectors/pakistan-vector-id652750800?k=20&m=652750800&s=612x612&w=0&h=9Uxf5t_3wIp3-AtbWAefKDR6mWKPucp6sfcpmoz0CTo=')
// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 3
scene.add(camera)


// Test
const flag = new THREE.Mesh(new THREE.PlaneGeometry(3, 2,20,20), new THREE.MeshBasicMaterial({map: texture ,  }))
scene.add(flag)
// sprite.scale.set(imageWidth,imageHeight,1);
flag.rotation.set(-0.1,0,0)
camera.position.z = 5;

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('.webgl')
})
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(sizes.width, sizes.height)




const clock = new THREE.Clock()
/**
 * Loop
 */
const loop = () =>
{
    // Update
    // flag.rotation.y += 0.01

    const t = clock.getElapsedTime()

    flag.geometry.vertices.map(v=>{
        v.z = 0.34 * Math.sin(v.x * 2 + t)
    });

    flag.geometry.verticesNeedUpdate = true

    // Render
    renderer.render(scene, camera)

    // Keep looping
    window.requestAnimationFrame(loop)
}
loop()