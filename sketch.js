var student1
var student2
function setup() {
  createCanvas(400,400);
student1 = new Student("John",12,6)
student2 = new Student("Bob",8,5)
}
function draw() 
{
  background(30);
 student1.display ()
 student2.display()
}
