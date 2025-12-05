import {CGFobject, CGFappearance} from '../lib/CGF.js';
import { MyQuad } from "./MyQuad.js";
import { MyUnitCubeQuad} from "./MyUnitCubeQuad.js"
import { MyPyramid } from './MyPyramid.js';
import { MyCylinder } from './MyCylinder.js';

/**
 * MyStationModel
 * @constructor
 * @param scene - Reference to MyScene object
 */

export class MyMadeira extends CGFobject{
    constructor(scene){
        super(scene);
        this.madeira = new MyCylinder(this.scene, 80, 80);
     
    }

    display(){
        //base
        this.scene.pushMatrix()
        this.scene.rotate((90*Math.PI/180)*(180*Math.PI/180), 0, 1, 0);
        this.scene.rotate(90*Math.PI/180, 1, 0, 0);
        //this.scene.rotate(90*Math.PI/180, 0, 1, 0);
        this.scene.scale(0.5,3,0.5);
        //this.scene.translate(0,0,0);
        this.madeira.display();
        this.scene.popMatrix();
        //madeira
        this.scene.pushMatrix()
        this.scene.translate(0.2,0,0.8);
        this.scene.rotate((90*Math.PI/180)*(180*Math.PI/180), 0, 1, 0);
        this.scene.rotate(90*Math.PI/180, 1, 0, 0);
        //this.scene.rotate(90*Math.PI/180, 0, 1, 0);
        this.scene.scale(0.5,3,0.5);
        this.madeira.display();
        this.scene.popMatrix();
        //m
        this.scene.pushMatrix()
        this.scene.translate(0.2,0.8,0.2);
        this.scene.rotate((90*Math.PI/180)*(180*Math.PI/180), 0, 1, 0);
        this.scene.rotate(90*Math.PI/180, 1, 0, 0);
        //this.scene.rotate(90*Math.PI/180, 0, 1, 0);
        this.scene.scale(0.5,3,0.5);
        this.madeira.display();
        this.scene.popMatrix();
    }
}

