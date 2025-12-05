import {CGFappearance,CGFobject} from '../lib/CGF.js';
import {MyCylinder} from "./MyCylinder.js";
import { MyCircle } from './MyCircle.js';

/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyWheels extends CGFobject {
    constructor(scene){
        super(scene);
        this.cilindro = new MyCylinder(this.scene,25);
        this.tampa = new MyCircle(this.scene,25,0.75);
    }

    display(){
        this.scene.pushMatrix();

        this.scene.pushMatrix();
        
        this.scene.translate(0,0.8,0);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.rotate(Math.PI/2, 0, 0, 1);
        this.scene.scale(0.75,0.2,0.75);
        this.cilindro.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        //this.scene.translate(0,,0);
        this.scene.translate(-0.2,0.75,0);
        this.scene.rotate(Math.PI/2, 0, 0, 1);
        this.scene.rotate(Math.PI/6, 0, 1, 0);
        this.tampa.display();
        this.scene.popMatrix();
       

        this.scene.popMatrix();
    }
}

