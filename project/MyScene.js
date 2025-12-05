import { CGFscene, CGFcamera, CGFaxis, CGFappearance, CGFtexture } from "../lib/CGF.js";
import { MyPlane } from "./MyPlane.js";
import { MyTrack } from "./MyTrack.js";
import { MyCylinder } from "./MyCylinder.js";
import { MySphere  } from "./MySphere.js";
import { MyCircle  } from "./MyCircle.js";
import { MyCubeMap  } from "./MyCubeMap.js";
import { MyTrainModel } from "./MyTrainModel.js";
import { MyCrane } from "./MyCrane.js";
import { MyStationModel } from "./MyStationModel.js";
import { MyMadeira } from "./MyMadeira.js";



/**
* MyScene
* @constructor
*/
export class MyScene extends CGFscene {
    constructor() {
        super();
    }
    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);

        this.setUpdatePeriod(50);
        var Pontos = [
            {x: 0, z: 10, type: "simple"},
            {x: 8, z: 0, type: "station"},
            {x: 16, z: 0, type: "simple"},
            {x: 20, z: 10, type: "station"}
        ]
        
        this.enableTextures(true);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.plane = new MyPlane(this, 20, 0,1,0,1);
        this.cylinder = new MyCylinder(this, 6);
        this.track = new MyTrack(this, Pontos);
        this.sphera = new MySphere(this, 80, 80);
        this.circle = new MyCircle(this, 10);
        this.cubemap = new MyCubeMap(this);
        this.train = new MyTrainModel(this);
        this.station = new MyStationModel(this); 
        //this.crane = new MyCrane(this, 0, 90*Math.PI/180);
        //this.madeira = new MyMadeira(this);
       
        //Objects connected to MyInterface
        this.displayAxis = true;


        //this.material.loadTexture('images/earth.jpg');
        //this.textures = new CGFtexture(this,'images/earth.jpg');
        this.sphereAppearance = new CGFappearance(this);
		this.sphereAppearance.setAmbient(0.3, 0.3, 0.3, 1);
		this.sphereAppearance.setDiffuse(0.7, 0.7, 0.7, 1);
		this.sphereAppearance.setSpecular(0.0, 0.0, 0.0, 1);
		this.sphereAppearance.setShininess(120);
        this.sphereAppearance.loadTexture("./images/earth.jpg");
        this.sphereAppearance.setTextureWrap('REPEAT', 'MIRRORED_REPEAT');

        this.circleAppearance = new CGFappearance(this);
		this.circleAppearance.setAmbient(0.3, 0.3, 0.3, 1);
		this.circleAppearance.setDiffuse(0.7, 0.7, 0.7, 1);
		this.circleAppearance.setSpecular(0.0, 0.0, 0.0, 1);
		this.circleAppearance.setShininess(120);
        this.circleAppearance.loadTexture("./images/window.jpg");
        this.circleAppearance.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');

        this.democubeTexture = [
            new CGFtexture(this, 'images/demo_cubemap/back.png'),
            new CGFtexture(this, 'images/demo_cubemap/bottom.png'),
            new CGFtexture(this, 'images/demo_cubemap/front.png'),
            new CGFtexture(this, 'images/demo_cubemap/left.png'),
            new CGFtexture(this, 'images/demo_cubemap/right.png'),
            new CGFtexture(this, 'images/demo_cubemap/top.png')
        ];
    
        this.testcubeTexture = [
            new CGFtexture(this, 'images/test_cubemap/nx.png'),
            new CGFtexture(this, 'images/test_cubemap/ny.png'),
            new CGFtexture(this, 'images/test_cubemap/px.png'),
            new CGFtexture(this, 'images/test_cubemap/nz.png'),
            new CGFtexture(this, 'images/test_cubemap/pz.png'),
            new CGFtexture(this, 'images/test_cubemap/py.png')
        ];

        this.nevecubeTexture = [
            new CGFtexture(this, 'images/Neve/negx.jpg'),
            new CGFtexture(this, 'images/Neve/negy.jpg'),
            new CGFtexture(this, 'images/Neve/posx.jpg'),
            new CGFtexture(this, 'images/Neve/negz.jpg'),
            new CGFtexture(this, 'images/Neve/posz.jpg'),
            new CGFtexture(this, 'images/Neve/posy.jpg')
        ]

        this.cidadecubeTexture = [
            new CGFtexture(this, 'images/cidade/negx.jpg'),
            new CGFtexture(this, 'images/cidade/negy.jpg'),
            new CGFtexture(this, 'images/cidade/posx.jpg'),
            new CGFtexture(this, 'images/cidade/negz.jpg'),
            new CGFtexture(this, 'images/cidade/posz.jpg'),
            new CGFtexture(this, 'images/cidade/posy.jpg')
        ]

        this.praiacubeTexture = [
            new CGFtexture(this, 'images/praia/negx.jpg'),
            new CGFtexture(this, 'images/praia/negy.jpg'),
            new CGFtexture(this, 'images/praia/posx.jpg'),
            new CGFtexture(this, 'images/praia/negz.jpg'),
            new CGFtexture(this, 'images/praia/posz.jpg'),
            new CGFtexture(this, 'images/praia/posy.jpg')
        ]

        this.selectedTexture = -1;
        this.textures = [this.democubeTexture, this.testcubeTexture, this.nevecubeTexture, this.cidadecubeTexture, this.praiacubeTexture];
        this.texturesIds = {'Demo': 0, "Test": 1, 'Neve': 2, 'Cidade': 3, 'Praia': 4};

        this.cubemap.setNewTextures(this.democubeTexture);

    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(30,30,30), vec3.fromValues(0, 0, 0));
    }

    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setEmission(0,0,0,1);
        this.setShininess(10.0);
    }

    updateCubeTextures(){
        this.cubemap.setNewTextures(this.textures[this.selectedTexture]);
        console.log("textra selecionada: " + this.selectedTexture);
    }

    checkKeys()  {
        var text="Keys pressed: ";
        var keysPressed=false;
        // Check for key codes e.g. in https://keycode.info/
        if (this.gui.isKeyPressed("KeyW")){
            text+=" W ";
            keysPressed=true;
            this.train.crane.tilt(0.01);
        }

        if (this.gui.isKeyPressed("KeyS")){
            text+=" S ";
            keysPressed=true;
            this.train.crane.tilt(-0.01);
        }

        if (this.gui.isKeyPressed("KeyA")){
            text+=" A ";
            keysPressed=true;
            this.train.crane.turn(-0.01);
        }

        if (this.gui.isKeyPressed("KeyD")){
            text+=" D ";
            keysPressed=true;
            this.train.crane.turn(0.01);
        }

        if (this.gui.isKeyPressed("KeyR")){
            text+=" D ";
            keysPressed=true;
            this.train.crane.reset();
        }

        if (keysPressed)
            console.log(text);
  }

    // called periodically (as per setUpdatePeriod() in init())
    update(t){
        this.checkKeys();
        //To be done...
    }


    display() {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();

        // Draw axis
        if (this.displayAxis)
            this.axis.display();
        this.setDefaultAppearance();

        // ---- BEGIN Primitive drawing section
        this.pushMatrix();
        this.train.display();
         
        this.pushMatrix();
        this.scale(50,1,50);
        this.rotate(-Math.PI*0.5, 1,0,0);
        this.popMatrix();
       
        //meio estranho
        this.pushMatrix();
        this.translate(0,25,0);
        //this.scale(50,50,50);
        this.cubemap.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(0,0.1,0);
        this.track.display();
        this.popMatrix();

        //this.crane.display();
        //this.station.display();
        //this.madeira.display();
        
        //this.cylinder.display();
        //this.sphereAppearance.apply();
        //this.sphera.display();
        
        //this.circleAppearance.apply();
        //this.circle.display();
        
        
        this.popMatrix();

        // ---- END Primitive drawing section
    }
}