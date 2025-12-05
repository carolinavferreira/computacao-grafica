import {CGFappearance,CGFobject} from '../lib/CGF.js';
import {MyCylinder} from "./MyCylinder.js";
import { MySphere } from './MySphere.js';

/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyCrane extends CGFobject {
    constructor(scene, ang_rot, ang_elev){
        super(scene);
        this.cilindro_verde = new MyCylinder(this.scene,70);
        this.cilindro_azul = new MyCylinder(this.scene,25);
        this.esfera = new MySphere(this.scene,80,80);
        this.cabo = new MyCylinder(this.scene,25);
        this.ang_rot = ang_rot;
        this.ang_elev = ang_elev;
    }

    turn(val) {
        if(this.ang_rot<Math.PI/4) this.ang_rot += val;
        else if(this.ang_rot>-Math.PI-Math.PI/4) this.ang_rot -= val;
        console.log("entrei no turn, val: " + val + "ang_rot: ", this.ang_rot);
    }

    tilt(val) {
        if(this.ang_elev<Math.PI/16) this.ang_elev += val;
        else if(this.ang_elev>-Math.PI/8-0.2) this.ang_elev -= val;
    }

    reset(){
        this.ang_elev = 90*Math.PI/180;
        this.ang_rot = (180*Math.PI)*(180*Math.PI/180);
    }

    display(){
        this.scene.pushMatrix();
    
        
        this.scene.pushMatrix();
        this.scene.scale(0.4,2.3,0.4);
        this.cilindro_verde.display();
        this.scene.popMatrix();

        //rotação
        this.scene.pushMatrix();
        this.scene.translate(0,2.5,0);
        this.scene.scale(0.6,0.6,0.6);
        this.esfera.display();
        this.scene.popMatrix();

        //elevação
        this.scene.pushMatrix();
        //this.scene.rotate(this.ang_elev, 0, 1, 0);
        this.scene.translate(0,2.5,0);
        this.scene.rotate(this.ang_rot, 0, 1, 0);
        this.scene.rotate(this.ang_elev, 1, 0, 0);
        //this.scene.rotate(90*Math.PI/180, 0, 0, 1);
        this.scene.scale(0.25,4,0.25);
        //this.scene.rotate(90*Math.PI/90, 0, 1, 0);
        this.cilindro_azul.display();
        this.scene.popMatrix();

        //cabo
        this.scene.pushMatrix();
        this.scene.translate(-3.5,2.5,0);
        this.scene.rotate(90*Math.PI/180, 0, 0, 1);
        //this.scene.rotate((180*Math.PI)*(180*Math.PI/180), 0, 1, 0);
        //this.scene.rotate(90*Math.PI/180, 1, 0, 0);
        this.scene.rotate(this.ang_rot, 0, 1, 0);
        this.scene.rotate(this.ang_elev, 1, 0, 0);
        //this.scene.rotate(90*Math.PI/180, 0, 0, 1);
        this.scene.scale(0.1,3.5,0.1);
        this.cabo.display();
        this.scene.popMatrix();
       

        this.scene.popMatrix();
    }
}