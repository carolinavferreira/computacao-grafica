import {CGFobject, CGFappearance} from '../lib/CGF.js';
import { MyQuad } from "./MyQuad.js";
/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyUnitCubeQuad extends CGFobject {
	constructor(scene) {
		super(scene);

		this.face1 = new MyQuad(this.scene);
        this.face2 = new MyQuad(this.scene);
        this.face3 = new MyQuad(this.scene);
        this.face4 = new MyQuad(this.scene);
        this.face5 = new MyQuad(this.scene);
        this.face6 = new MyQuad(this.scene);

        //this.initMaterials(scene);
	}

    /*initMaterials(scene) {
        //laterais
        this.side = new CGFappearance(scene);
        this.side.setAmbient(0.1, 0.1, 0.1, 1);
        this.side.setDiffuse(0.9, 0.9, 0.9, 1);
        this.side.setSpecular(0.1, 0.1, 0.1, 1);
        this.side.setShininess(10.0);

        //topo
        this.top = new CGFappearance(scene);
        this.top.setAmbient(0.1, 0.1, 0.1, 1);
        this.top.setDiffuse(0.9, 0.9, 0.9, 1);
        this.top.setSpecular(0.1, 0.1, 0.1, 1);
        this.top.setShininess(10.0);

        //fundo
        this.bottom = new CGFappearance(scene);
        this.bottom.setAmbient(0.1, 0.1, 0.1, 1);
        this.bottom.setDiffuse(0.9, 0.9, 0.9, 1);
        this.bottom.setSpecular(0.1, 0.1, 0.1, 1);
        this.bottom.setShininess(10.0);

    }*/
	
	display() {

        //this.side.apply();
        if(this.scene.nearestFilter)
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        else
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.LINEAR);
        
        //Face 1 "lado direito"
        this.scene.pushMatrix();
        this.scene.translate(0,0,0.5);
        this.scene.rotate(90*Math.PI, 1, 0, 0);
        this.face1.display();
        this.scene.popMatrix();

        //this.bottom.apply();
        if(this.scene.nearestFilter)
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        else
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.LINEAR);

        //Face 2 base
        this.scene.pushMatrix();
        this.scene.translate(0,-0.5,0);
        this.scene.rotate(90*Math.PI/180, 1, 0, 0);
        this.face2.display();
        this.scene.popMatrix();

        //this.top.apply();
        if(this.scene.nearestFilter)
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        else
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.LINEAR);
        
        //Face 3 base superior
        this.scene.pushMatrix();
        this.scene.translate(0,0.5,0);
        this.scene.rotate(90*Math.PI/180, 1, 0, 0);
        this.scene.rotate(180*Math.PI/180, 1, 0,0);
        this.face2.display();
        this.scene.popMatrix();

        //Face 4 "lado esquerdo"
        this.scene.pushMatrix();
        this.scene.translate(0,0,-0.5);
        this.scene.rotate(Math.PI*90, 1, 0, 0);
        this.scene.rotate(Math.PI*180/180, 1, 0, 0);
        this.face4.display();
        this.scene.popMatrix();

        //Face 5 "parte da frente"
        this.scene.pushMatrix();
        this.scene.translate(0.5,0,0);
        this.scene.rotate(90*Math.PI/180, 0, 1, 0);
        this.face5.display();
        this.scene.popMatrix();

        //Face 6 "parte de trás"
        this.scene.pushMatrix();
        this.scene.translate(-0.5,0,0);
        this.scene.rotate(90*Math.PI/180, 0, 1, 0);
        this.scene.rotate(180*Math.PI/180,0,1,0);
        this.face5.display();
        this.scene.popMatrix();
    }
}

