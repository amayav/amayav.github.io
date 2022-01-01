//import React, {useMemo, useState} from 'react';
import React from 'react';
import { useTable, Column } from 'react-table';
//import logo from './logo.svg';
import './App.css';

export interface IdolsData {
  idol1: any;
  idol2: any;
  idol3: any;
  idol4: any;
  idol5: any;
}
export interface Data {
  start: string;
  idol1: string;
  idol2: string;
  idol3: string;
  idol4: string;
  idol5: string;
  perfect: string;
  guard: string;
}

function IdolsTable ({ columns, data } : { columns: Column<IdolsData>[], data: IdolsData[] } ) : any {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable<IdolsData>({ columns, data });

  return(
    <table {...getTableProps()}>
    <thead>
    {headerGroups.map(headerGroup => (
      <tr {...headerGroup.getHeaderGroupProps()}>
      {headerGroup.headers.map(column => (
        <th {...column.getHeaderProps()}>
        {column.render("Header")}</th>
      ))}
      </tr>
    ))}
    </thead>
    <tbody {...getTableBodyProps()}>
    {rows.map((row, i) => {
      prepareRow(row);
      return (
        <tr {...row.getRowProps()}>
        {row.cells.map(cell => {
          return (
            <td {...cell.getCellProps()}>
            {cell.render("Cell")}</td>
          )
        })}
        </tr>
      );
    })}
    </tbody>
    </table>
  )
}

function Table ({ columns, data } : { columns: Column<Data>[], data: Data[] } ) : any {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable<Data>({ columns, data });

  return(
    <table {...getTableProps()}>
    <thead>
    {headerGroups.map(headerGroup => (
      <tr {...headerGroup.getHeaderGroupProps()}>
      {headerGroup.headers.map(column => (
        <th {...column.getHeaderProps()}>
        {column.render("Header")}</th>
      ))}
      </tr>
    ))}
    </thead>
    <tbody {...getTableBodyProps()}>
    {rows.map((row, i) => {
      prepareRow(row);
      return (
        <tr {...row.getRowProps()}>
        {row.cells.map(cell => {
          return (
            <td {...cell.getCellProps()}>
            {cell.render("Cell")}</td>
          )
        })}
        </tr>
      );
    })}
    </tbody>
    </table>
  )
}

export type Skill = {
  name: string,
  interval: number,
  time: string
}

interface Props {
  skill: Skill,
    id: number,
    changeName: (id: number, time: string) => void
    changeInterval: (id: number, interval: number) => void
    changeTime: (id: number, time: string) => void
}
export const PERFECT_SUPPORT_3="perfect_support_3"
export const PERFECT_SUPPORT_2="perfect_support_2"
export const PERFECT_SUPPORT_1="perfect_support_1"
export const DAMAGE_GUARD="damage_guard"
export const SKILL_BOOST="skill_boost"
export const ENCORE="encore"
export const CINDERELLA_MAGIC="cinderella_magic"
export const OTHER="other"

class Idol extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props)
    this.handleListBoxNameChange = this.handleListBoxNameChange.bind(this)
    this.handleInputBoxIntervalChange = this.handleInputBoxIntervalChange.bind(this)
    this.handleListBoxTimeChange = this.handleListBoxTimeChange.bind(this)
  }

  private handleListBoxNameChange = (e: React.ChangeEvent<HTMLSelectElement>) : any => {
    this.props.changeName(this.props.id, e.target.value)
  }

  private handleInputBoxIntervalChange = (e: React.ChangeEvent<HTMLInputElement>) : any => {
    this.props.changeInterval(this.props.id, Number(e.target.value))
  }

  private handleListBoxTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) : any => {
    this.props.changeTime(this.props.id, e.target.value)
  }

  render() {
    return (
      <>
      <select name={`skill_name_${this.props.id}`} id={`skill_id_${this.props.id}`} onChange={this.handleListBoxNameChange} value={this.props.skill.name}>
      <option value={PERFECT_SUPPORT_3}>SSR パーフェクトサポート</option>
      <option value={PERFECT_SUPPORT_2}>SR パーフェクトサポート</option>
      <option value={PERFECT_SUPPORT_1}>R パーフェクトサポート</option>
      <option value={DAMAGE_GUARD}>ダメージガード</option>
      <option value={SKILL_BOOST}>スキルブースト</option>
      <option value={ENCORE}>アンコール</option>
      <option value={CINDERELLA_MAGIC}>シンデレラマジック</option>
      <option value={OTHER}>その他</option>
      </select>

        <input type="number" id={`interval_id_${this.props.id}`} name={`interval_name_${this.props.id}`} min="1" placeholder="4" onChange={this.handleInputBoxIntervalChange} value={this.props.skill.interval}/>
        秒ごと

          <select name={`time_name_${this.props.id}`} id={`time_id_${this.props.id}`} onChange={this.handleListBoxTimeChange} value={this.props.skill.time}>
          <option value="time_a">一瞬の間</option>
          <option value="time_b">わずかな間</option>
          <option value="time_c">少しの間</option>
          <option value="time_d">しばらくの間</option>
          <option value="time_e">かなりの間</option>
        </select>
      </>
    )
  }
}

export class Idols extends React.Component <{}, {skills: Skill[], music_time: number, is_resonance: boolean}> {
  constructor(props: any) {
    super(props)
    const default_skill : Skill = {
      name: PERFECT_SUPPORT_3,
      interval: 8,
      time: "time_b"
    }
    this.state = {
      skills: [default_skill, default_skill, default_skill, default_skill, default_skill],
      music_time: 120,
      is_resonance: false,
    }
    this.changeName = this.changeName.bind(this)
    this.changeInterval = this.changeInterval.bind(this)
    this.changeTime = this.changeTime.bind(this)
    this.handleChangeMusicTime = this.handleChangeMusicTime.bind(this)
  }
  last_activated_skill_id: number = -1
  current_encore_id_list: number[] = [-1, -1, -1, -1, -1]

  idolsData : IdolsData = { idol1:null, idol2:null, idol3:null, idol4:null, idol5:null, }

  data : Data[] = [ {start: "*", idol1: "*", idol2:"*", idol3:"*", idol4:"*", idol5:"*", perfect:"*", guard:"*" } ]

  protected updateTimeLine(current_time: number, skills: Skill[], music_time: number = 120) : Data {
    function is_activated(current_time: number, skill: Skill): boolean {
      /*
       * skill is activated after skill interval
       * skill isn't activated the last 3 (not includes just 3) seconds of music (time when the last note is)
       */
      return (
        (current_time >= skill.interval) &&
        (((current_time - skill.interval) % skill.interval) <= skillTimes[skill.time]) &&
        ((current_time - ((current_time - skill.interval) % skill.interval)) <= (music_time - 3))
      )
    }

    function is_just_activated(current_time: number, skill: Skill): boolean {
      return (
        (current_time >= skill.interval) &&
        (((current_time - skill.interval) % skill.interval) === 0) &&
        (current_time <= (music_time - 3))
      )
    }

    let being_activated_skills_name: string[] = []
    /*
    let perfect_support_count = 0
    let skill_boost_count = 0
    */

    /* define skill encore uses */
    for (let i=4; i>=0; i--) {
      if ((skills[i].name === ENCORE) &&
        (is_just_activated(current_time, skills[i])) &&
        (this.last_activated_skill_id !== -1)) {
        this.current_encore_id_list[i] = this.last_activated_skill_id
      }
    }

    /* listing up activated skills */
    for (let i=4; i>=0; i--) {
      if (!is_activated(current_time, skills[i])) {
        continue
      }
      if (skills[i].name === ENCORE) {
        // at least one skill other than encore should be activated
        if (this.current_encore_id_list[i] === -1) {
          continue
        }
        if ((skills[this.current_encore_id_list[i]].name) === CINDERELLA_MAGIC) {
          for (let j=4; j>=0; j--) {
            being_activated_skills_name.push(skills[j].name)
          }
        } else {
          being_activated_skills_name.push(skills[this.current_encore_id_list[i]].name)
        }
      } else {
        if (skills[i].name === CINDERELLA_MAGIC) {
          for (let j=4; j>=0; j--) {
            being_activated_skills_name.push(skills[j].name)
          }
        } else {
          being_activated_skills_name.push(skills[i].name)
        }

        /* calculate the last activated skill's id for the next 0.5 sec */
        /* encore does not copy the skills activated at the same time */
        if (is_just_activated(current_time, skills[i])) {
          this.last_activated_skill_id = i
        }
      }
      /*
          if (current_skill_name === PERFECT_SUPPORT_3) {
            perfect_support_count += 3
          } else if (current_skill_name === PERFECT_SUPPORT_2) {
            perfect_support_count += 2
          } else if (current_skill_name === PERFECT_SUPPORT_1) {
            perfect_support_count += 1
          } else if (current_skill_name === SKILL_BOOST) {
            skill_boost_count += 1
          } else if (current_skill_name === DAMAGE_GUARD) {
            damage_guard_count += 1
          }
       */
    }

    function is_perfect(): boolean {
      return being_activated_skills_name.includes(PERFECT_SUPPORT_3) &&
        being_activated_skills_name.includes(SKILL_BOOST)
    }

    function is_guard(): boolean {
      return being_activated_skills_name.includes(DAMAGE_GUARD)
    }

    function display(id: number, encore_id: number): string {
      if (! is_activated(current_time, skills[id])) {
        return ""
      } else if (skills[id].name === ENCORE) {
        if (encore_id !== -1) { // encore doesn't activate if no other skills have been activated
          if (skills[encore_id].name === CINDERELLA_MAGIC) {
            return "12345"
          } else {
            return (encore_id + 1).toFixed(0)
          }
        } else {
          return ""
        }
      } else if (skills[id].name === CINDERELLA_MAGIC) {
        return "12345"
      } else {
        return (id + 1).toFixed(0)
      }
    }

    return {
      start: current_time.toFixed(1) + " -",
      idol1: display(0, this.current_encore_id_list[0]),
      idol2: display(1, this.current_encore_id_list[1]),
      idol3: display(2, this.current_encore_id_list[2]),
      idol4: display(3, this.current_encore_id_list[3]),
      idol5: display(4, this.current_encore_id_list[4]),
      perfect: is_perfect() ? "p" : "-",
      guard: is_guard() ? "g" : "-",
    }
  };

  update (id: number, skill: Skill, music_time: number) {
    let new_skills : Skill[] = this.state.skills
    new_skills[id-1] = skill
    this.setState({skills: new_skills})

    this.last_activated_skill_id = -1
    this.current_encore_id_list = [-1, -1, -1, -1, -1]
    const timeList : number[] = [...Array(music_time*2)].map((_i, i) => i/2)
    this.data = timeList.map(startTime => {
      return this.updateTimeLine(startTime, new_skills, music_time)
    })
  }

  changeName (id: number, name: string) {
    let new_skill = {...this.state.skills[id-1], name: name}
    this.update(id, new_skill, this.state.music_time)
  }

  changeInterval (id: number, interval: number) {
    let new_skill: Skill = {...this.state.skills[id-1], interval: interval}
    this.update(id, new_skill, this.state.music_time)
  }

  changeTime (id: number, time: string) {
    let new_skill: Skill = {...this.state.skills[id-1], time: time}
    this.update(id, new_skill, this.state.music_time)
  }

  private handleChangeMusicTime = (e: React.ChangeEvent<HTMLInputElement>) : any => {
    let new_music_time: number = Number(e.target.value)
    this.setState({music_time: new_music_time})
    this.update(0, this.state.skills[0], new_music_time)
  }

  render() {
    const idolColumns : Column<IdolsData>[] = [
        { Header: "アイドル4特技", accessor: "idol4" },
        { Header: "アイドル2特技", accessor: "idol2" },
        { Header: "アイドル1特技", accessor: "idol1" },
        { Header: "アイドル3特技", accessor: "idol3" },
        { Header: "アイドル5特技", accessor: "idol5" },
      ]
    const columns : Column<Data>[] = [
        { Header: "start", accessor: "start" },
        { Header: "4", accessor: "idol4" },
        { Header: "2", accessor: "idol2" },
        { Header: "1", accessor: "idol1" },
        { Header: "3", accessor: "idol3" },
        { Header: "5", accessor: "idol5" },
        { Header: "perfect", accessor: "perfect" },
        { Header: "guard", accessor: "guard" },
      ]
    this.idolsData = 
      {
        idol1: <Idol skill={this.state.skills[0]} id={1} changeName={this.changeName} changeInterval={this.changeInterval} changeTime={this.changeTime}/>,
        idol2: <Idol skill={this.state.skills[1]} id={2} changeName={this.changeName} changeInterval={this.changeInterval} changeTime={this.changeTime}/>,
        idol3: <Idol skill={this.state.skills[2]} id={3} changeName={this.changeName} changeInterval={this.changeInterval} changeTime={this.changeTime}/>,
        idol4: <Idol skill={this.state.skills[3]} id={4} changeName={this.changeName} changeInterval={this.changeInterval} changeTime={this.changeTime}/>,
        idol5: <Idol skill={this.state.skills[4]} id={5} changeName={this.changeName} changeInterval={this.changeInterval} changeTime={this.changeTime}/>,
      }
    return (
      <p>
      <IdolsTable columns={idolColumns} data={[this.idolsData]}/>
      楽曲時間（残り3秒未満になると特技が発動しない）
      <input
      type="number"
      id="music_time"
      name="music_time"
      onChange={this.handleChangeMusicTime}
      value={this.state.music_time}
      />
      {/*checked={checked}*/}
      <Table columns={columns} data={this.data}/>
      </p>
    )
  }
}

let skillTimes: { [key: string]: number } = {
  'time_a': 3.0,
  'time_b': 4.5,
  'time_c': 6.0,
  'time_d': 7.5,
  'time_e': 9.0,
};

function App() {
  /*
  interface Props {
    checked?: boolean;
  }
  */

  const [val, setVal] = React.useState([""]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (val.includes(e.target.value)) {
      setVal(val.filter(item => item !== e.target.value));
    } else {
      setVal([...val, e.target.value]);
    }
  };

  const CenterList : string[] = [
    "レゾナンス",
  ]

  const CheckBoxTemplate = ({ id, value, checked = false, onChange } : {id: string, value: string, checked: boolean, onChange: any}) => {
    return (
      <input
      type="checkbox"
      id={id}
      name="center"
      checked={checked}
      onChange={onChange}
      value={value}
      />
    )
  }

  const CheckBox = () => {
    return (
      <>
      {CenterList.map((item, index) => {
        index = index + 1
        return (
          <>
          <label htmlFor="resonance">{item}</label>
          <CheckBoxTemplate
          id={`id_${index}`}
          value={item}
          onChange={handleChange}
          checked={val.includes(item)}
          />
          </>
        )
      })}
      </>
    )
  }

  return (
    <>
    <div className="App">
    {
    /*<header className="App-header">
       {<img src={logo} className="App-logo" alt="logo" />}
       <p>
       Edit <code>src/App.tsx</code> and save to reload.
       </p>
       <a
       className="App-link"
       href="https://reactjs.org"
       target="_blank"
       rel="noopener noreferrer"
       >
       Learn React
       </a>
       </header>*/
    }

    {<p>アイドルマスタースターリットシーズン好評発売中！</p>}
    {<p>シンデレラガールズ総選挙では小早川紗枝に投票してくれますよね</p>}
    {<p>チューニング は SR パーフェクトサポート と同じ</p>}
    {<p>トリコロール・シンフォニー は スキルブースト と同じ</p>}
    {<p>未対応：レゾナンス, グランドライブ, 強制パーフェクト率計算, 強制パーフェクト時間計算, 強制パーフェクト + ダメージガード率計算, 強制パーフェクト + ダッメージガード時間計算</p>}
    {CenterList.map((item, index) => {
      index = index + 1
      return (
        <>
        <CheckBox />
        </>
      )
    })}
    <p>
  </p>
  {<Idols/>}
    </div>
    </>
  );
}

export default App;