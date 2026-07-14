window.PROTOTYPE_DATA = {
  roles: {
    system: { name: "系统管理员", user: "周砚青", avatar: "周", pages: ["dashboard","registrations","review","codes","extensions","verifications","sites","content","users","permissions","settings","logs"] },
    business: { name: "业务管理员", user: "林清禾", avatar: "林", pages: ["dashboard","registrations","review","codes","extensions","verifications","sites","content","users"] },
    reviewer: { name: "审核人员", user: "沈知行", avatar: "沈", pages: ["dashboard","registrations","review","codes","verifications"] }
  },
  registrations: [
    {id:"DJ202607130086",code:"CZ-0713-4928",user:"顾明洲",phone:"138****5712",address:"瘦西湖街道友谊新村12幢",time:"2026-07-13 09:42",expire:"07-15 09:42",status:"待核销",photo:"正常",location:"正常",distance:"1.8 km"},
    {id:"DJ202607130085",code:"CZ-0713-4831",user:"严晚晴",phone:"151****3086",address:"梅岭街道史可法路46号",time:"2026-07-13 09:16",expire:"07-15 09:16",status:"待核销",photo:"待审核",location:"疑似越界",distance:"4.7 km"},
    {id:"DJ202607130081",code:"CZ-0713-4107",user:"程屿川",phone:"177****9264",address:"东关街道盐阜东路8号",time:"2026-07-13 08:37",expire:"07-15 08:37",status:"已核销",photo:"正常",location:"正常",distance:"2.3 km"},
    {id:"DJ202607120174",code:"CZ-0712-9374",user:"许听澜",phone:"139****1648",address:"汶河街道淮海路31号",time:"2026-07-12 17:22",expire:"07-14 17:22",status:"已退回",photo:"异常",location:"正常",distance:"3.1 km"},
    {id:"DJ202607110163",code:"CZ-0711-8529",user:"陆景和",phone:"186****4327",address:"城北街道黄金坝路19号",time:"2026-07-11 15:06",expire:"07-13 15:06",status:"即将失效",photo:"正常",location:"正常",distance:"5.2 km"},
    {id:"DJ202607100142",code:"CZ-0710-7624",user:"乔予安",phone:"133****8075",address:"文峰街道渡江南路22号",time:"2026-07-10 11:48",expire:"07-12 11:48",status:"已失效",photo:"待审核",location:"疑似异常",distance:"6.8 km"},
    {id:"DJ202607090119",code:"CZ-0709-6380",user:"苏砚秋",phone:"159****2741",address:"双桥街道四望亭路98号",time:"2026-07-09 14:33",expire:"07-11 14:33",status:"作废",photo:"异常",location:"越界",distance:"8.6 km"}
  ],
  extensionRequests: [
    {id:"YQ20260713012",code:"CZ-0711-8529",applicant:"陆景和",original:"2026-07-13 15:06",days:1,reason:"临时堆放点今日接收量较大，需次日上午送达",time:"07-13 09:18",status:"待审批"},
    {id:"YQ20260712009",code:"CZ-0712-8816",applicant:"叶书宁",original:"2026-07-14 13:28",days:1,reason:"车辆临时检修",time:"07-12 16:44",status:"已通过"},
    {id:"YQ20260711006",code:"CZ-0711-7904",applicant:"闻谨言",original:"2026-07-13 08:10",days:2,reason:"施工进度调整",time:"07-11 17:02",status:"已拒绝"}
  ],
  verifications: [
    {id:"HX202607130054",code:"CZ-0713-4107",form:"CZLD-260713-0186",verifier:"严师傅",scan:"07-13 10:06",verified:"07-13 10:09",site:"隋炀西路临时堆放点",status:"已核销"},
    {id:"HX202607120162",code:"CZ-0712-9374",form:"—",verifier:"严师傅",scan:"07-12 18:03",verified:"07-12 18:07",site:"隋炀西路临时堆放点",status:"已退回"},
    {id:"HX202607120151",code:"CZ-0712-9017",form:"CZLD-260712-0241",verifier:"何师傅",scan:"07-12 16:31",verified:"07-12 16:35",site:"隋炀西路临时堆放点",status:"已核销"},
    {id:"HX202607110128",code:"CZ-0711-8053",form:"CZLD-260711-0192",verifier:"何师傅",scan:"07-11 14:12",verified:"07-11 14:15",site:"隋炀西路临时堆放点",status:"已核销"}
  ],
  reviewQueue: [
    {id:"DJ202607130085",title:"定位疑似越界",meta:"友谊新村 · 09:16",risk:"高"},
    {id:"DJ202607100142",title:"三次定位距离异常",meta:"渡江南路 · 11:48",risk:"中"},
    {id:"DJ202607090119",title:"现场照片疑似非实时",meta:"四望亭路 · 14:33",risk:"高"}
  ],
  sites: [
    {id:"SITE001",name:"隋炀西路临时堆放点",address:"隋炀西路89号",hours:"每日 09:00–18:00",contact:"严师傅",phone:"138****4092",area:"瘦西湖街道",status:"启用"},
    {id:"SITE002",name:"城北临时转运点",address:"黄金坝路与北外环交叉口东侧",hours:"周一至周六 08:30–17:30",contact:"何师傅",phone:"159****1836",area:"城北街道",status:"停用"}
  ],
  contents: [
    {id:"CMS001",type:"普法宣传",title:"装修垃圾分类与规范处置指引",version:"v3",updated:"2026-07-12 16:20",editor:"林清禾",status:"已发布"},
    {id:"CMS002",type:"办理指南",title:"建筑垃圾处置核准办理指南",version:"v2",updated:"2026-07-11 10:46",editor:"林清禾",status:"已发布"},
    {id:"CMS003",type:"备案指南",title:"装修垃圾处置方案备案说明",version:"v2",updated:"2026-07-10 14:08",editor:"周砚青",status:"已发布"},
    {id:"CMS004",type:"服务须知",title:"景区居民装修垃圾投放须知",version:"v5",updated:"2026-07-13 09:35",editor:"林清禾",status:"草稿"},
    {id:"CMS005",type:"温馨提示",title:"装修垃圾范围及禁止混投说明",version:"v1",updated:"2026-07-08 11:24",editor:"周砚青",status:"已下线"}
  ],
  users: [
    {id:"WXU260713086",name:"顾明洲",phone:"138****5712",registered:"2026-05-18",records:7,abnormal:0,last:"2026-07-13 09:42",status:"正常"},
    {id:"WXU260713085",name:"严晚晴",phone:"151****3086",registered:"2026-06-02",records:4,abnormal:1,last:"2026-07-13 09:16",status:"正常"},
    {id:"WXU260712174",name:"许听澜",phone:"139****1648",registered:"2026-04-26",records:9,abnormal:2,last:"2026-07-12 17:22",status:"正常"},
    {id:"WXU260709119",name:"苏砚秋",phone:"159****2741",registered:"2026-03-11",records:12,abnormal:3,last:"2026-07-09 14:33",status:"封禁"}
  ],
  logs: [
    {id:"LOG2607131042",user:"林清禾",role:"业务管理员",module:"延期审批",action:"通过延期申请",object:"YQ20260712009",time:"2026-07-13 10:42:18",result:"成功"},
    {id:"LOG2607131018",user:"沈知行",role:"审核人员",module:"照片定位审核",action:"标记定位异常",object:"DJ202607130085",time:"2026-07-13 10:18:44",result:"成功"},
    {id:"LOG2607130956",user:"周砚青",role:"系统管理员",module:"业务规则",action:"更新区域围栏",object:"RULE-AREA-01",time:"2026-07-13 09:56:07",result:"成功"},
    {id:"LOG2607130937",user:"林清禾",role:"业务管理员",module:"内容管理",action:"保存服务须知草稿",object:"CMS004",time:"2026-07-13 09:37:31",result:"成功"},
    {id:"LOG2607121846",user:"周砚青",role:"系统管理员",module:"角色权限",action:"停用后台账号",object:"ADM009",time:"2026-07-12 18:46:02",result:"成功"}
  ]
};
