import { inherits } from "util";

// Example of Inheritance

export class grandfather
{
  logical()
  {
    return "logical";
  }
}
export class father extends grandfather
{
    hardwork()
    {
        return "hardworking";
    }
}
export class child extends father
{
   artist()
   {
       return "I am "+this.logical()+" & "+this.hardwork()+" artist";
   }
}

// second example

export class Faculty
{
    skills()
    {
        
    }
}

export class JavaFaculty extends Faculty
{
    skills()
    {
        return "I am Expert in Java";
    }
} 
export class PHPFaculty extends Faculty
{
    skills()
    {
        return "I am Expert in PHP ";
    }
}



// second example

export class car
{
    Engine:string;
    Tyre:string;
    SoundSystem:boolean;

    constructor(E,T,S)
    {
        this.Engine=E;
        this.Tyre=T;
        this.SoundSystem=S;
    }
}
export interface color
{
    clr:string;
}

export class Jeep extends car implements color
{
    clr="Black";

    Enginedata()
    {
        return this.Engine;
    }
    Tyredata()
    {
        return this.Tyre;
    }
    SoundSystemdata()
    {
        return this.SoundSystem;
    }
    clrdata()
    {
        return this.clr;
    }

}