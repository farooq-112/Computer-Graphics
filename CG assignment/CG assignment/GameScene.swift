//
//  GameScene.swift
//  CG assignment
//
//  Created by Farooq on 05/09/2022.
//

import SpriteKit
import GameplayKit

class GameScene: SKScene {
    var x: Int = -450
    
    
    var textureAtlas = SKTextureAtlas()
    var mainGuy = SKSpriteNode()
    var movingPerson = [SKTexture]()
    var door = SKSpriteNode()
    var doorImages = [SKTexture]()
    var doortextureAtlas = SKTextureAtlas()
    
    
    
    
    
    override func didMove(to view: SKView) {
        textureAtlas = SKTextureAtlas(named: "img")
        NSLog("\(textureAtlas.textureNames)")
        doortextureAtlas = SKTextureAtlas(named: "door")
        print("\(doortextureAtlas.textureNames)")
        
        for i in 1...doortextureAtlas.textureNames.count-1 {
            doorImages.append(SKTexture(imageNamed: "\(doortextureAtlas.textureNames[i]).png"))
        }
        
        for i in 1...textureAtlas.textureNames.count-1 {
            let name = "\(textureAtlas.textureNames[i]).png"
            movingPerson.append(SKTexture(imageNamed: name))
        }
        
        door = SKSpriteNode(imageNamed: doortextureAtlas.textureNames[0])
        door.size = CGSize(width: self.frame.width/5, height: self.frame.height)
        door.position = CGPoint(x: 420, y: 0)
                mainGuy = SKSpriteNode(imageNamed: textureAtlas.textureNames[0] )
        mainGuy.size = CGSize(width: self.frame.width/5, height: self.frame.height)
        mainGuy.position = CGPoint(x: x, y: 0)
        
        self.addChild(mainGuy)
        self.addChild(door)

    }
    
    override func sceneDidLoad() {
        super.sceneDidLoad()
    }
    
 
    
  
   
    
    override func touchesBegan(_ touches: Set<UITouch>, with event: UIEvent?) {
        
        
    }
    
    override func touchesMoved(_ touches: Set<UITouch>, with event: UIEvent?) {
    }
    
    override func touchesEnded(_ touches: Set<UITouch>, with event: UIEvent?) {
        
    }
    
    override func touchesCancelled(_ touches: Set<UITouch>, with event: UIEvent?) {
       
    }
    
    
    override func update(_ currentTime: TimeInterval) {
        
        if x<400 {
            x += 4
            moveTowardDoor()
        }
    }
    
    func moveTowardDoor()  {
      
        let dooropen = SKAction.repeat(.animate(with: doorImages, timePerFrame: 0.2), count: 1)
        door.run(dooropen, completion: {
            print("Commplete")
            let allImages = SKAction.animate(with: self.movingPerson, timePerFrame: 0.1)
            let movePerson = SKAction.moveTo(x: CGFloat(self.x), duration: 0.5)
            self.mainGuy.run(SKAction.repeat(SKAction.sequence([movePerson, allImages]), count: 1))
        })
        
    }
}
