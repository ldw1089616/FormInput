import { Component, OnInit } from '@angular/core';
import { DemoControllerService, Form1Dto} from '../../service';
import {MessageService, SelectItem} from 'primeng/api';
import { Form1SubDto } from 'src/app/service/model/form1SubDto';
@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css'],
  providers: [MessageService]
})
export class Form1Component implements OnInit {
  formInfo: Form1Dto;
  sexOptions: SelectItem[];
  houseTypeOptions: SelectItem[];
  trafficTypeOption: SelectItem[];
  blockedDocument:boolean;
  blockedTraffic:boolean;
  displayNotice:boolean;
  constructor(
    private service :DemoControllerService,
    private messageService:MessageService
  ) { }

  ngOnInit() {
    this.formInfo ={};
    this.sexOptions =[{label: '男', value: '男'},{label: '女 ', value: '女'}];
    this.houseTypeOptions =[{label: '自住', value: '自住'},{label: '出租', value: '出租'},{label: '空闲', value: '空闲'}];
    this.trafficTypeOption=[{label: '火车', value: '火车'},{label: '飞机', value: '飞机'},{label: '自驾', value: '自驾'}
    ,{label: '长途汽车', value: '长途汽车'},{label: '轮船', value: '轮船'},{label: '其他', value: '其他'}]
    this.blockedDocument = false;
    this.blockedTraffic = false;
    this.formInfo.returnPathList = [];
    this.displayNotice =true;
  }
  regist(){
    if(!this.inputCheck()){
      return;
    }
    this.blockedDocument = true;
    this.blockedTraffic = true;
     this.service.form1insertUsingPOST(this.formInfo).subscribe(
      val=>{
        this.messageService.add(
          {severity:'success', 
          summary:'success', 
          detail:'提交成功！'
        });

        this.formInfo={};
        this.formInfo.returnPathList = [];
      },
      error=> {
        this.messageService.add(
          {severity:'error', 
          summary:'错误', 
          detail:'系统异常请稍后再试！'
        });
        this.blockedDocument = false;
        this.blockedTraffic = false;
      },
      () => {
        this.blockedDocument = false;
        this.blockedTraffic = false;
      }
    );
  }

  inputCheck(){
    if(!this.formInfo.fname){
      this.messageService.add(
        {severity:'error', 
        summary:'错误', 
        detail:'请输入姓名！'
      });
       return false;
    }
    if(!this.formInfo.faddr){
      this.messageService.add(
        {severity:'error', 
        summary:'错误', 
        detail:'请输入住址！'
      });
       return false;
    }
    if(!this.formInfo.fphone){
      this.messageService.add(
        {severity:'error', 
        summary:'错误', 
        detail:'请输入电话号码！'
      });
       return false;
    }
    if(!this.formInfo.freturnDate){
      this.messageService.add(
        {severity:'error', 
        summary:'错误', 
        detail:'请输入回连时间！'
      });
       return false;
    }

    return true;
  }
  addTraffic(){
    let flg:Boolean = false;
    if(this.formInfo.returnPathList.length >0 ){
      this.formInfo.returnPathList.forEach(item=>{
        if(!item.from || !item.target){
          flg = true;
          this.messageService.add(
            {severity:'error', 
            summary:'错误', 
            detail:'请将上一条填完后再添加新的！'
          });
          return;
        }
      });
    }
    if(flg){
      return;
    }
    const data: Form1SubDto = {};

    this.formInfo.returnPathList.push(data);
  }

  delTraffic(index){
    this.formInfo.returnPathList.splice(index,1);
  }
}
