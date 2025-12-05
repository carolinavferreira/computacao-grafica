import {CGFobject, CGFappearance} from '../lib/CGF.js';
import { MyQuad } from "./MyQuad.js";
/**
 * MyCubeMap
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyCubeMap extends CGFobject {
	constructor(scene) {
		super(scene);

		this.face1 = new MyQuad(this.scene);
        this.face2 = new MyQuad(this.scene);
        this.face3 = new MyQuad(this.scene);
        this.face4 = new MyQuad(this.scene);
        this.face5 = new MyQuad(this.scene);
        this.face6 = new MyQuad(this.scene);

        this.faces = new CGFappearance(this.scene);
		this.faces.setAmbient(0.1, 0.1, 0.1, 1);
		this.faces.setDiffuse(0.9, 0.9, 0.9, 1);
		this.faces.setSpecular(0.1, 0.1, 0.1, 1);
		this.faces.setShininess(10.0);
		this.faces.setTextureWrap('REPEAT', 'REPEAT');

        
        //this.initMaterials(scene);
	}

    setNewTextures(texture) {
		this.back = texture[0];
		this.bottom = texture[1];
		this.front = texture[2];
		this.left = texture[3];
		this.right = texture[4];
		this.top = texture[5];
	}

	textureBack() {
		this.faces.setTexture(this.back);
	}

	textureBottom() {
		this.faces.setTexture(this.bottom);
	}

	textureFront() {
		this.faces.setTexture(this.front);
	}

	textureLeft() {
		this.faces.setTexture(this.left);
	}

	textureRight() {
		this.faces.setTexture(this.right);
	}

	textureTop() {
		this.faces.setTexture(this.top);
	}


    /*initMaterials(scene) {
        //laterais
        this.left = new CGFappearance(scene);
        this.left.setAmbient(0.1, 0.1, 0.1, 1);
        this.left.setDiffuse(0.9, 0.9, 0.9, 1);
        this.left.setSpecular(0.1, 0.1, 0.1, 1);
        this.left.setShininess(10.0);
        this.left.loadTexture('images/demo_cubemap/left.png');
        this.left.setTextureWrap('REPEAT', 'REPEAT');

        this.right = new CGFappearance(scene);
        this.right.setAmbient(0.1, 0.1, 0.1, 1);
        this.right.setDiffuse(0.9, 0.9, 0.9, 1);
        this.right.setSpecular(0.1, 0.1, 0.1, 1);
        this.right.setShininess(10.0);
        this.right.loadTexture('images/demo_cubemap/right.png');
        this.right.setTextureWrap('REPEAT', 'REPEAT');
        
        //topo
        this.top = new CGFappearance(scene);
        this.top.setAmbient(0.1, 0.1, 0.1, 1);
        this.top.setDiffuse(0.9, 0.9, 0.9, 1);
        this.top.setSpecular(0.1, 0.1, 0.1, 1);
        this.top.setShininess(10.0);
        this.top.loadTexture('images/demo_cubemap/top.png');
        this.top.setTextureWrap('REPEAT', 'REPEAT');

        //fundo
        this.bottom = new CGFappearance(scene);
        this.bottom.setAmbient(0.1, 0.1, 0.1, 1);
        this.bottom.setDiffuse(0.9, 0.9, 0.9, 1);
        this.bottom.setSpecular(0.1, 0.1, 0.1, 1);
        this.bottom.setShininess(10.0);
        this.bottom.loadTexture('images/demo_cubemap/bottom.png');
        this.bottom.setTextureWrap('REPEAT', 'REPEAT');

        this.front = new CGFappearance(scene);
        this.front.setAmbient(0.1, 0.1, 0.1, 1);
        this.front.setDiffuse(0.9, 0.9, 0.9, 1);
        this.front.setSpecular(0.1, 0.1, 0.1, 1);
        this.front.setShininess(10.0);
        this.front.loadTexture('images/demo_cubemap/front.png');
        this.front.setTextureWrap('REPEAT', 'REPEAT');

        this.back = new CGFappearance(scene);
        this.back.setAmbient(0.1, 0.1, 0.1, 1);
        this.back.setDiffuse(0.9, 0.9, 0.9, 1);
        this.back.setSpecular(0.1, 0.1, 0.1, 1);
        this.back.setShininess(10.0);
        this.back.loadTexture('images/demo_cubemap/back.png');
        this.back.setTextureWrap('REPEAT', 'REPEAT');

    }*/
	
	display() {
        this.scene.pushMatrix();
        this.scene.scale(50, 50, 50);
        if(this.scene.nearestFilter)
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        else
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.LINEAR);
        
        //Face 1 "lado direito"
        this.scene.pushMatrix();
        this.scene.translate(0,0,0.5);
        this.scene.rotate(180*Math.PI/180.0, 0, 1, 0);
        this.scene.rotate(180*Math.PI/180.0, 0, 1, 0);
        this.scene.rotate(180*Math.PI/180.0, 1, 0, 0);
        this.textureRight();
        this.faces.apply();
        this.face1.display();
        this.scene.popMatrix();

        if(this.scene.nearestFilter)
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        else
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.LINEAR);

        //Face 2 base
        this.scene.pushMatrix();
        this.scene.translate(0,-0.5,0);
        this.scene.rotate(90*Math.PI/180.0, 1, 0, 0);
        this.scene.rotate(180*Math.PI/180.0, 1, 0, 0);
        this.textureBottom();
        this.faces.apply();
        this.face2.display();
        this.scene.popMatrix();

        if(this.scene.nearestFilter)
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        else
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.LINEAR);
        
        //Face 3 base superior
        this.scene.pushMatrix();
        this.scene.translate(0,0.5,0);
        this.scene.rotate(90*Math.PI/180, 1, 0, 0);
        this.textureTop();
        this.faces.apply();
        this.face3.display();
        this.scene.popMatrix();

        //Face 4 "lado esquerdo"
        this.scene.pushMatrix();
        this.scene.translate(0,0,-0.5);
        this.scene.rotate(90*Math.PI/180, 1, 0, 0);
        this.scene.rotate(180*Math.PI/180, 0, 1, 0);
        this.scene.rotate(90*Math.PI/180, -1, 0, 0);
        this.textureLeft();
        this.faces.apply();
        this.face4.display();
        this.scene.popMatrix();

        //Face 5 "parte da frente"
        this.scene.pushMatrix();
        this.scene.translate(0.5,0,0);
        this.scene.rotate(90*Math.PI/180, 0, 1, 0);
        this.scene.rotate(180*Math.PI/180, 1, 0, 0);
        this.textureFront();
        this.faces.apply();
        this.face5.display();
        this.scene.popMatrix();

        //Face 6 "parte de trás"
        this.scene.pushMatrix();
        this.scene.translate(-0.5,0,0);
        this.scene.rotate(180*Math.PI/180, 1, 0, 0);
        this.scene.rotate(90*Math.PI/180, 0, 1, 0);
        this.textureBack();
        this.faces.apply();
        this.face6.display();
        this.scene.popMatrix();

        this.scene.popMatrix();
    }
}

