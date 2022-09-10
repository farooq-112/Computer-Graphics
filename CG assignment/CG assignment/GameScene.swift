//
//  GameScene.swift
//  CG assignment
//
//  Created by Farooq on 05/09/2022.
//

import SpriteKit
import GameplayKit

class GameScene: SKScene {
    
    var textureAtlas = SKTextureAtlas()
    var mainGuy = SKSpriteNode()
    var textureArray = [SKTexture]()
    
    override func didMove(to view: SKView) {
        textureAtlas = SKTextureAtlas(named: "img")
        NSLog("\(textureAtlas.textureNames)")
        
        for i in 1...textureAtlas.textureNames.count-1 {
            let name = "\(textureAtlas.textureNames[i]).png"
            textureArray.append(SKTexture(imageNamed: name))
        }
        mainGuy = SKSpriteNode(imageNamed: textureAtlas.textureNames[0] )
        mainGuy.size = CGSize(width: self.frame.width/2, height: self.frame.height/2)
        mainGuy.position = CGPoint(x: 150, y: 150)
        
        self.addChild(mainGuy)
    }
    
    override func sceneDidLoad() {
        super.sceneDidLoad()
    }
    
 
    
  
   
    
    override func touchesBegan(_ touches: Set<UITouch>, with event: UIEvent?) {
        mainGuy.run(SKAction.repeatForever(.animate(with: textureArray, timePerFrame: 0.5)))
       
    }
    
    override func touchesMoved(_ touches: Set<UITouch>, with event: UIEvent?) {
     
    }
    
    override func touchesEnded(_ touches: Set<UITouch>, with event: UIEvent?) {
       
    }
    
    override func touchesCancelled(_ touches: Set<UITouch>, with event: UIEvent?) {
       
    }
    
    
    override func update(_ currentTime: TimeInterval) {
      
    }
}
