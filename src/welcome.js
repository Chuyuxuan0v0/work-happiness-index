
import React, { useState } from 'react';
import { Form, Input, Button, Select } from 'antd';
import './App.less';
const Welcome = () => {

  function handleChange(value, text) {
    if (text === 'place') {
      setPlace(value)
      console.log(` 选中值 ${value}++++${text}`);
    }
    if (text === 'colleague') {
      setColleague(value)
      console.log(` 选中值 ${value}++++${text}`);
    }
    if (text === 'pepole') {
      setPepole(value)
      console.log(` 选中值 ${value}++++${text}`);
    }
    if (text === 'degree') {
      setDegree(value)
      console.log(` 选中值 ${value}++++${text}`);
    }
  }




  const [avgincome, setAvgincome] = useState(5000);
  const [workTimes, setWorkTimes] = useState(10);
  const [workDay, setWorkDay] = useState(26);
  const [goHomeTime, setGoHomeTime] = useState(1);
  const [relaxTime, setRelaxTime] = useState(1.5);
  const [place, setPlace] = useState(1);
  const [colleague, setColleague] = useState(0.95);
  const [pepole, setPepole] = useState(0.95);
  const [degree, setDegree] = useState(0.95);
  const [results, setResults] = useState(0)
  const handleResult = () => {
    const fenzi = (avgincome / workDay) * place * pepole * colleague;
    const fenmu = 35 * (workTimes + goHomeTime - (0.5 * relaxTime)) * degree
    setResults(fenzi / fenmu)
    console.log(`结果${fenzi / fenmu},
                  workTimes${workTimes}
                  workDay${workDay}
                  place${place}
                  colleague${colleague}
                  pepole${pepole}
                  avgincome${avgincome},
                  goHomeTime${goHomeTime},
                  degree${degree},
                  relaxTime${relaxTime}`)
  }

  const options = {
    place: [
      { 0.8: '偏远地/山区、通勤困难郊区、偏远地区工地等户外艰苦工作环境' },
      { 1: '市区，通勤较为方便，有自己的工位等普通室内工作环境' },
      { 0.9: '室外、工地、工厂等非偏远，通勤较为方便工作环境' },
      { 1.1: '体制内工作（国企、教师、等事业单位非偏远、交通通勤方便等工作）' },
      { 1.1: 'CBD 工作' }
    ],
    colleague: [
      { 0.8: '脑残同事，能让自己气出血，沟通十分困难' },
      { 0.95: '普普通通的同事，普普通通的上司' },
      { 1.05: '优秀的同事，工作生活都有很大的帮助，亦师亦友' },
    ],
    pepole: [
      { 0.9: '没有好看的异性，而且少，平时无交集' },
      { 1: '不多不少，大多普通，极少很惊艳' },
      { 1.1: '有很多异性，而且颜值颇佳' }
    ],
    degree: [
      { 0.8: '普通专科（含中、大专）' },
      { 1: '普通本科（含一、二、三本）' },
      { 1.2: '重点本科（985/211）' },
      { 1.4: '普通学校硕士研究生' },
      { 1.6: '重点学校硕士研究生（985/211）' },
      { 1.8: '普通学校博士研究生' },
      { 2: '重点学校博士研究生（985/211）' },

    ]

  }

  return (
    <>
      <Form
        className='formss'
        name="basic"
      >
        <Form.Item
          label="您的月薪"
        >
          <Input type="number" suffix="元" value={avgincome} onChange={(e) => {setAvgincome(e.target.value)}} />
          <span>一个月工资卡到账多少 </span>
        </Form.Item>
        <Form.Item
          label="工作天数"
        >
          <Input type="number" suffix="天" value={workDay} onChange={(e) => setWorkDay(e.target.value)} />
          <span> 平均一个月工作多少天</span>
        </Form.Item>

        <Form.Item
          label="上班时间"
        >
          <Input type="number" suffix="小时" placeholder="8.00" value={workTimes} onChange={(e) => setWorkTimes(e.target.value)} />
          <span>即下班时间点-上班时间点，单位为小时，可包含小数点后两位 </span>
        </Form.Item>

        <Form.Item
          label="通勤时间"
        >
          <Input type="number" suffix="小时" value={goHomeTime} onChange={(e) => setGoHomeTime(e.target.value)} placeholder="1.00" />
          <span>即包含上、下班的交通时间，单位为小时，可包含小数点后两位 </span>
        </Form.Item>
        <Form.Item
          label="休息时间"
        >
          <Input type="number" suffix="小时" placeholder="1.00" value={relaxTime} onChange={(e) => setRelaxTime(e.target.value)} />
          <span>即包含摸鱼滑水，吃法时间，单位为小时，可包含小数点后两位 </span>
        </Form.Item>


        <Form.Item
          label="环境系数"
        >
          {/* <Select key='a' defaultValue="1" onChange={() => handleChange()}>
          <Option value="0.8">偏远地/山区、通勤困难郊区、偏远地区工地等户外艰苦工作环境</Option>
          <Option value="1">市区，通勤较为方便，有自己的工位等普通室内工作环境</Option>
          <Option value="0.9" > 室外、工地、工厂等非偏远，通勤较为方便工作环境</Option>
          <Option value="1.1" >体制内工作（国企、教师、等事业单位非偏远、交通通勤方便等工作）</Option>
          <Option value="1.1" >CBD 工作</Option>
        </Select> */}

          <Select defaultValue={`市区，通勤较为方便，有自己的工位等普通室内工作环境${place}`} onChange={(value) => handleChange(value, `place`)}>
            {
              options.place.map((item, index) => (
                <Select.Option key={index} value={`${Object.getOwnPropertyNames(item)}`} >{item[Object.getOwnPropertyNames(item)]}</Select.Option>)
              )
            }
          </Select>
          <br></br>
          <span> 您现在工作所处的环境，根据实际情况选择即可 </span>
        </Form.Item>
        <Form.Item
          label="同事系数"
        >
          <Select defaultValue={`普普通通的同事，普普通通的上司${colleague}`} onChange={(value) => handleChange(value, `colleague`)}>
            {
              options.colleague.map((item, index) => (
                <Select.Option key={index} value={`${Object.getOwnPropertyNames(item)}`} >{item[Object.getOwnPropertyNames(item)]}</Select.Option>)
              )
            }
          </Select>

          <span> 您现在工作所处的环境，根据实际情况选择即可 </span>
        </Form.Item>

        <Form.Item
          label="异性系数"
        >
          <Select defaultValue={`不多不少，大多普通，极少很惊艳${pepole}`} onChange={(value) => handleChange(value, 'pepole')}>
            {
              options.pepole.map((item, index) => (
                <Select.Option key={index} value={`${Object.getOwnPropertyNames(item)}`} >{item[Object.getOwnPropertyNames(item)]}</Select.Option>)
              )
            }
          </Select>

          <span> 您现在工作所处的环境，根据实际情况选择即可 </span>
        </Form.Item>

        <Form.Item
          label="学历系数"
        >
          <Select defaultValue={`普通本科（含一、二、三本）${degree}`} onChange={(value) => handleChange(value, 'degree')}>
            {
              options.degree.map((item, index) => (
                <Select.Option key={index} value={`${Object.getOwnPropertyNames(item)}`} >{item[Object.getOwnPropertyNames(item)]}</Select.Option>)
              )
            }
          </Select>

          <span> 您现在拥有的最高学历，包含自考函授等，选取对应的即可 </span>
        </Form.Item>


        <Form.Item
          wrapperCol={{
            offset: 10,
            span: 24,
          }}
        >
          <Button type="primary" htmlType="submit" onClick={() => handleResult()}>
            提交
          </Button>
        </Form.Item>
      </Form>
      <br></br>
      <h1>你的计算结果为 {results.toFixed(2)}! </h1>
    </>
  )

}

export default Welcome