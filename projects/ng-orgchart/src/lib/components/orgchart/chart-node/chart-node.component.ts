import { Component, OnInit, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { Node } from '../shared/models/node.model';
import { NodeSelectService } from '../shared/services/node-select.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'orgchart-node',
  templateUrl: './chart-node.component.html',
  styleUrls: ['./chart-node.component.css'],
  animations: [
    trigger('expandCollapse', [
      state(
        'expanded',
        style({
          transform: 'translateY(0)',
          opacity: 1
        })
      ),
      state(
        'collapsed',
        style({
          transform: 'translateY(-50px)',
          opacity: 0
        })
      ),
      transition('expanded => collapsed', [animate('0.2s')]),
      transition('collapsed => expanded', [animate('0.2s')])
    ])
  ]
})
export class ChartNodeComponent implements OnInit {

  @Input() datasource: Node;
  @Input() nodeHeading;
  @Input() nodeContent;
  @Input() nodeTemplate: TemplateRef<any>;
  @Input() groupScale: number;
  @Input() select: string;

  @Output() nodeClick = new EventEmitter<any>();
  Arr = Array; // Array type captured in a variable
  isCollapsed = true;
  ecStyles: object;
  isSelected: boolean;
  subscription: Subscription;

  constructor(private nodeSelectService: NodeSelectService) {
    // subscribe to node selection status
    
    this.subscription = this.nodeSelectService.getSelect().subscribe(selection => {
      if (selection && selection.id) {
        this.isSelected = this.datasource.id === selection.id;
      } else { // clear selection when empty selection received
        this.isSelected = false;
      }
    });
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.datasource.isCollapsed=true
  }
  toggleChildren(event:any) {
    this.datasource.isCollapsed = !this.datasource.isCollapsed
    this.isCollapsed = this.datasource.isCollapsed
   
  }

  toggleAnimStart(event) {
    debugger
    if (this.datasource.isCollapsed) {
      // ???????????????????????????????????????????????????????????????????????????????????????
      if (
        event.element.parentElement &&
        event.element.parentElement.parentElement &&
        event.element.parentElement.parentElement.classList.contains('orgchart')
      ) {
        event.element.previousElementSibling.classList.add('oc-is-collapsed');
      }
    } else { // ????????????????????????????????????????????????????????????????????????????????????????????????
      this.ecStyles = {
        display: 'flex'
      };
    }
  }

  toggleAnimEnd(event) {
    debugger
    if (this.datasource.isCollapsed) { // ????????????????????????????????????????????????????????????????????????????????????????????????
      this.ecStyles = {
        display: 'none'
      };
    } else {
      // ???????????????????????????????????????????????????????????????????????????????????????
      if (
        event.element.parentElement &&
        event.element.parentElement.parentElement &&
        event.element.parentElement.parentElement.classList.contains('orgchart')
      ) {
        event.element.previousElementSibling.classList.remove('oc-is-collapsed');
      }
    }
  }

  onClickNode(e) {
   this.nodeClick.emit(this.datasource);
    if (this.select === 'single') {
      this.nodeSelectService.sendSelect(this.datasource.id);
    } else if (this.select === 'multiple') {
      this.isSelected = !this.isSelected;
    }
  }

  onNodeClick(e) {
    this.nodeClick.emit(e);
  }

}
