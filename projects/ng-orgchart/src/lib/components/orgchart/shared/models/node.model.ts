export class Node {
  id: string;
  name: string;
  title: string;
  isCollapsed:boolean;
  children?: Node[];
  level :number
}