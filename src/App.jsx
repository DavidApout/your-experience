import { useState,useEffect, use } from "react"
import "./App.css";
import {prestigeTitles} from "./Prestigetitles.js"
import pointSound from "./assets/1 note.wav"
import { statAnnouncements } from "./Accouments.js";
export default function App(){
const [Knowledge, setKnow] = useState(Number(localStorage.getItem("Knowledge")) ?? "0")
useEffect(() => {localStorage.setItem("Knowledge",Knowledge)},[Knowledge])
const [Guts, setGuts] = useState(Number(localStorage.getItem("Guts")) ?? "0")
useEffect(() => {localStorage.setItem("Guts",Guts)},[Guts])
const [Charm, setCharm] = useState(Number(localStorage.getItem("Charm")) ?? "0")
useEffect(() => {localStorage.setItem("Charm",Charm)},[Charm])
const [Kindness, setKind] = useState(Number(localStorage.getItem("Kindness")) ?? "0")
useEffect(() => {localStorage.setItem("Kindness",Kindness)},[Kindness])
const [Proficiency,Setpro] =  useState(Number(localStorage.getItem("Proficiency")) ?? "0") 
useEffect(() => {localStorage.setItem("Proficiency",Proficiency)},[Proficiency])
const [AlertMessage,SetAlertMessage] = useState("")
const [knowMessage,KnowSetMessage] = useState("")
const [gutsMessage,GutsSetMessage] = useState('')
const [KindMessage,KindSetMessage] = useState('')
const [charmMessage,CharmSetMessage] = useState('')
const [proMessage,ProSetMessage] = useState('')

const [PknowMessage,PKnowSetMessage] = useState('')
const [PgutsMessage,PGutsSetMessage] = useState('')
const [PKindMessage,PKindSetMessage] = useState('')
const [PcharmMessage,PCharmSetMessage] = useState('')
const [PproMessage,PProSetMessage] = useState('')

const [knowStars,setKnowStar] = useState(Number(localStorage.getItem("knowStars")?? "0"))
useEffect(() => {localStorage.setItem("knowStars",knowStars)},[knowStars])
const [gutsStars,setGutsStar] = useState(Number(localStorage.getItem("gutsStars") ?? "0"))
useEffect(() => { localStorage.setItem("gutsStars",gutsStars)},[gutsStars])
const [kindStars,setKindStar] = useState(Number(localStorage.getItem("kindStars") ?? "0"))
useEffect(() => { localStorage.setItem("kindStars",kindStars)},[kindStars])
const [charmStars,setCharmStar] = useState(Number(localStorage.getItem("charmStars") ?? "0"))
useEffect(() => { localStorage.setItem("charmStars",charmStars)},[charmStars])
const [proStars,setProStar] = useState(Number(localStorage.getItem("proStars") ?? "0") )
useEffect(() => { localStorage.setItem("proStars",proStars)},[proStars])

const [knowPrestige,setKnowPrestige] = useState(Number(localStorage.getItem("knowPrestige")?? "0"))
useEffect(() => {localStorage.setItem("knowPrestige",knowPrestige)},[knowPrestige])
const [gutsPrestige,setGutsPrestige] = useState(Number(localStorage.getItem("gutsPrestige")?? "0"))
useEffect(() => {localStorage.setItem("gutsPrestige",gutsPrestige)},[gutsPrestige])
const [kindPrestige,setKindPrestige] = useState(Number(localStorage.getItem("kindPrestige")?? "0"))
useEffect(() => {localStorage.setItem("kindPrestige",kindPrestige)},[kindPrestige])
const [charmPrestige,setCharmPrestige] = useState(Number(localStorage.getItem("charmPrestige")?? "0"))
useEffect(() => {localStorage.setItem("charmPrestige",charmPrestige)},[charmPrestige])
const [proPrestige,setProPrestige] = useState(Number(localStorage.getItem("proPrestige")?? "0"))
useEffect(() => {localStorage.setItem("proPrestige",proPrestige)},[proPrestige])

const [selectedStat,setSelectedStat] = useState(localStorage.getItem("selectedStat") ?? "Knowledge")

const [Experience,setExperience] = useState("")
const [Experiences,setExperiences] = useState(JSON.parse(localStorage.getItem("experiences") ?? "[]"))
useEffect(() => {localStorage.setItem("experiences",JSON.stringify(Experiences))},[Experiences])

const [historyFilter,setHistoryFilter] = useState("All")

const [knowTitle,setKnowTitle] = useState("")
const [gutsTitle,setGutsTitle] = useState("")
const [charmTitle,setCharmTitle] = useState("")
const [kindTitle,setKindTitle] = useState("")
const [proTitle,setProTitle] = useState("")

const [deleteNumber, setDeleteNumber] = useState("")

const [searchText, setSearchText] = useState("")
const [isDeleting,setIsDeleting] = useState(false)
const [soundEnabled,setSoundEnabled] = useState(true)
const [Edit,SetEdit] = useState(false)
const [editingId,setEditingId] = useState(null)
const [editText, setEditText] = useState("")

const [journal,Setjournal] = useState(false)
const [journalEntry,setJournalEntry] = useState("")
const [journalId,setJournalId] = useState("")

const [detailsId,setDetailsId] = useState("")
const [showDetails,setShowDetails] = useState(false)

const [annouce,setAnnouce] = useState("")

function resetStats () {
  setKnow(0)
  setGuts(0)
  setCharm(0)
  setKind(0)
  Setpro(0)

  setGutsPrestige(0)
  setProPrestige(0)
  setKnowPrestige(0)
  setKindPrestige(0)
  setCharmPrestige(0)

  setKnowStar(0)
  setGutsStar(0)
  setKindStar(0)
  setCharmStar(0)
  setProStar(0)

  KnowSetMessage("")
  GutsSetMessage("")
  KindSetMessage("")
  CharmSetMessage("")
  ProSetMessage("")

  PKnowSetMessage("")
  PGutsSetMessage("")
  PKindSetMessage("")
  PCharmSetMessage("")
  PProSetMessage("")

  setExperiences([])
}
function currentPrestige (name,Prestige) {
  let prestigeNumber = "p" + Prestige
  if (name == "Knowledge"){
    return prestigeTitles[0].Knowledge[prestigeNumber] ?? "Legend"
  }
  if (name == "Guts"){
    return prestigeTitles[1].Guts[prestigeNumber]
  }
  if (name == "Charm"){
    return prestigeTitles[2].Charm[prestigeNumber]
  }
  if (name == "Proficiency"){
    return prestigeTitles[4].Proficiency[prestigeNumber]
  }
  if (name == "Kindness"){
    return prestigeTitles[3].Kindness[prestigeNumber]
  }
}
function experienceAnnouncements (){
 
  if (selectedStat === "Knowledge"){
    const randomIndex = Math.floor(Math.random() *  statAnnouncements.Knowledge.length)
    const knowAccounce = statAnnouncements.Knowledge[randomIndex]
    return SetAlertMessage(knowAccounce)
  }
  if (selectedStat === "Guts"){
     const randomIndex = Math.floor(Math.random() *  statAnnouncements.Guts.length)
    const gutsAccounce = statAnnouncements.Guts[randomIndex]
     return SetAlertMessage(gutsAccounce)
  }
  if (selectedStat === "Charm"){
    const randomIndex = Math.floor(Math.random() *  statAnnouncements.Charm.length)
    const charmAccounce = statAnnouncements.Charm[randomIndex]
      return SetAlertMessage(charmAccounce)
  }
  if (selectedStat === "Kindness"){
     const randomIndex = Math.floor(Math.random() *  statAnnouncements.Kindness.length)
    const kindAccounce = statAnnouncements.Kindness[randomIndex]
      return SetAlertMessage(kindAccounce)

  }
  if (selectedStat === "Proficiency"){
    const randomIndex = Math.floor(Math.random() *  statAnnouncements.Proficiency.length)
    const proAccounce = statAnnouncements.Proficiency[randomIndex]
      return SetAlertMessage(proAccounce)
  }
}
function confirmExperience () {
  const sound = new Audio(pointSound)
  const newID = crypto.randomUUID()
  if (Experience.trim() === "" ){
   SetAlertMessage("Enter an experience")
  } else {
  setExperiences(previous => [...previous,{Text: Experience.trim(),
    stat: selectedStat,id: newID,CreatedAt: new Date().toISOString(), 
  }])
  if (selectedStat === "Knowledge"){
    addKnowledge()
    
  }
  if (selectedStat === "Guts"){
    addGuts()
  }
  if (selectedStat === "Charm"){
    addCharm()
  }
  if(selectedStat === "Kindness"){
    addKind()
  }
  if(selectedStat === "Proficiency"){
    addPro()
  }
if (soundEnabled){
  sound.play()
} 
experienceAnnouncements()
setExperience("")
Setjournal(true)
setJournalId(newID)
setJournalEntry("")
}
}

function reach10 (stat,statMessage,statName){
  statMessage(statName + " gained a star!")
  stat(0)
  setTimeout(() => {
    statMessage("")
  }, 3000);
}

function reachPrestige (statStar,prestige,statMessage,statName,currentPrestige){
    if (currentPrestige < 10){
      statMessage(statName + " You have reached Prestige!")
      prestige(previous => Math.min(previous + 1,10))
      statStar(0)
    } else {
      statMessage("")
    }
    
    setTimeout(() => {
      statMessage("")
    },3000);
}

function addKnowledge() {
  const nextPoints = Knowledge + 1;
  const nextStars = knowStars + 1;
  if (nextPoints >= 5) {
    reach10(setKnow,KnowSetMessage,"Knowledge")
    setKnowStar(previous => previous + 1)
     if (nextStars >= 5){
    reachPrestige(setKnowStar,setKnowPrestige,PKnowSetMessage,"Knowledge",knowPrestige)
    KnowSetMessage("")
  }
  } else {
    setKnow(nextPoints)
  }
}

function addGuts(){
  const nextPoints = Guts + 1
  const nextStars = gutsStars + 1;
  if (nextPoints >= 5){
    reach10(setGuts,GutsSetMessage,"Guts")
    setGutsStar(previous => previous + 1)
     if (nextStars >= 5){
    reachPrestige(setGutsStar,setGutsPrestige,PGutsSetMessage,"Guts",gutsPrestige)
    GutsSetMessage("")
  }
  } else {
  setGuts(nextPoints)
  }
}

function addCharm(){
  const nextPoints = Charm + 1
  const nextStars = charmStars + 1
  if (nextPoints >= 5){
    reach10(setCharm,CharmSetMessage,"Charm")
    setCharmStar(previous => previous + 1)
    if (nextStars >= 5){
    reachPrestige(setCharmStar,setCharmPrestige,PCharmSetMessage,"Charm",charmPrestige)
    CharmSetMessage("")
  }
  } else {
  setCharm(nextPoints)
  }
}

function addKind(){
  const nextPoints = Kindness + 1
  const nextStars = kindStars + 1
  if (nextPoints >= 5){
    reach10(setKind,KindSetMessage,"Kindness")
    setKindStar(previous => previous + 1)
     if (nextStars >= 5){
    reachPrestige(setKindStar,setKindPrestige,PKindSetMessage,"Kindness",kindPrestige)
    KindSetMessage("")
  }
  } else {
  setKind(nextPoints)
  }
}

function addPro(){
  const nextPoints = Proficiency + 1
  const nextStars = proStars + 1
  if (nextPoints >= 5){
    reach10(Setpro,ProSetMessage,"Proficiency") 
    setProStar(previous => previous + 1)
     if (nextStars >= 5){
    reachPrestige(setProStar,setProPrestige,PProSetMessage,"Proficency",proPrestige)
    ProSetMessage("")
  }
  } else {
  Setpro(nextPoints)
  }
}
function deleteExperience(idToDelete) {
   const experienceToDelete =  Experiences.find(entry => entry.id === idToDelete)
  
  if (!experienceToDelete) return
   setExperiences(previous =>
    previous.filter(entry => entry.id !== idToDelete)
  )
  if (experienceToDelete.stat === "Knowledge"){
    if (Knowledge > 0){
       setKnow(previous => previous - 1)
    } else if (knowStars > 0) {
      setKnowStar(previous => previous - 1)
      setKnow(4)
    }
    else if (knowPrestige > 0){
      setKnowPrestige(previous => previous - 1)
      setKnowStar(4)
      setKnow(4)
    }
  }
  if (experienceToDelete.stat === "Guts"){
    if (Guts > 0){
      setGuts(previous => previous - 1)  
    }else if(gutsStars > 0){
      setGutsStar(previous => previous - 1)
      setGuts(4)
    }else if (gutsPrestige > 0){
      setGutsPrestige(previous => previous - 1)
      setGutsStar(4)
      setGuts(4)
    }
  }
  if (experienceToDelete.stat === "Charm"){
    if (Charm > 0){
    setCharm(previous => previous - 1)  
    }else if(charmStars > 0){
      setCharmStar(previous => previous - 1)
      setCharm(4)
    }else if (charmPrestige > 0){
      setCharmPrestige(previous => previous - 1)
      setCharmStar(4)
      setCharm(4)
    }
  }
  if (experienceToDelete.stat === "Kindness"){
    if (Kindness > 0){
      setKind(previous => previous - 1)
    } else if(kindStars > 0){
      setKindStar(previous => previous - 1)
      setKind(4)
    }else if (kindPrestige > 0){
      setKindPrestige(previous => previous - 1)
      setKindStar(4)
      setKind(4)
    }
  }
  if (experienceToDelete.stat === "Proficiency"){
    if (Proficiency > 0){
      Setpro(previous => previous - 1)
    } else if (proStars > 0){
    setProStar(previous => previous - 1)
    Setpro(4)
  } else if (proPrestige > 0){
    setProPrestige(previous => previous - 1)
      setProStar(4)
      Setpro(4)
  }
  }
  SetAlertMessage("")
}
function saveExperience (){
  if (editText.trim() === ""){
    SetAlertMessage("Enter Some Text")
    return
  }
  setExperiences(previous => previous.map(entry => entry.id === editingId ? {...entry, Text:editText.trim()}: entry))
  setEditingId(null)
  setEditText("")
  SetAlertMessage("")
}
function saveJournal (){
  setExperiences(previous => previous.map(entry => entry.id === journalId ? {...entry,journal: journalEntry}: entry))
  Setjournal(on => !on)
}
function theshowDetails (id){
  setDetailsId(previous => previous === id ? null : id)

}
  return (  
  <main>
    <h1>Your Experience</h1>
    <p>Your Own World</p>
    <div className="experience-controls">
    <input placeholder="Enter Your Experience" value={Experience} onChange={event => setExperience(event.target.value)}></input>
    {journal ? <><input value={journalEntry} placeholder="Enter Journal" onChange={event => setJournalEntry(event.target.value)}></input><button onClick={saveJournal}>Comfirm Journal Entry</button></> : ""}
    <select value={selectedStat} onChange={event => setSelectedStat(event.target.value)}>
      <option value="Knowledge">Knowledge</option>
      <option value="Guts">Guts</option>
      <option value="Charm">Charm</option>
      <option value="Kindness">Kindness</option>
      <option value="Proficiency">Proficiency</option>
    </select>
    <button onClick={confirmExperience}>Confirm Experience</button>
    </div>
    <p>{AlertMessage}</p>
   <div className="stats-grid">
    {selectedStat === "Knowledge" &&(
     <section id="KnowSection" className="stat-card">
     <h2>Knowledge</h2>
    <p>Knowledge:{Knowledge} </p>
    <p>{knowMessage}</p>
    <p>{PknowMessage}</p>
    <p>Knowledge Stars: {knowStars}</p>
    <p>Knowledge Prestige: {knowPrestige}</p> 
    </section> 
    )}

    {selectedStat === "Guts" && ( <section id="GutsSection" className="stat-card">
    <h2>Guts</h2>
    <p>Guts: {Guts}</p>
    <p>{gutsMessage}</p>
    <p>{PgutsMessage}</p>
    <p>Guts Stars: {gutsStars}</p>
    <p>Guts Prestige: {gutsPrestige}</p>
    </section>)}
    
    {selectedStat === "Charm" && ( <section id="CharmSection" className="stat-card">
      <h2>Charm</h2>
      <p>Charm: {Charm} </p>
     <p>{charmMessage}</p>
     <p>{PcharmMessage}</p>
     <p>Charm Prestige: {charmPrestige}</p>
     <p>Charm Stars: {charmStars}</p> 
    </section>)}
    
    {selectedStat === "Kindness" && (<section id="Kindsection" className="stat-card"> 
    <h2>Kindness</h2>
    <p>Kindness: {Kindness}</p>
     <p>{KindMessage}</p>
     <p>{PKindMessage}</p>
    <p>Kind Stars: {kindStars}</p>
    <p>Kindness Prestige: {kindPrestige}</p>
    </section>)}
    
   {selectedStat === "Proficiency"&& (<section id="proSection" className="stat-card">
    <h2>Proficiency</h2>
    <p>Proficiency: {Proficiency}</p>
     <p>{proMessage}</p>
     <p>{PproMessage}</p>
     <p>Proficiency Stars: {proStars}</p>
     <p>Proficiency Prestige: {proPrestige}</p>
    </section>)}
   </div>
    
    <section id="resetSection" className="reset">
       <h2>Reset</h2>
    <button onClick={resetStats}>Reset Stats</button>
    <button onClick={() => setSoundEnabled(previous => !previous)}>{soundEnabled ? "Sound On" : "Sound Off"}</button>
    </section>
    <section id="YourStats" className="your-stats">
      <h2>Your Stats: </h2>
      <div className="know-stats">
        <p>Knowledge:  </p>
      <p>{currentPrestige("Knowledge",knowPrestige)}</p>
      <p>{knowStars}</p>
      </div>
     <div className="guts-stats">
      <p>Guts: </p>
      <p>{currentPrestige("Guts",gutsPrestige)}</p>
      <p>{gutsStars}</p>
     </div>
      <div className="charm-stats">
       <p>Charm: </p>
      <p>{currentPrestige("Charm",charmPrestige)}</p>
      <p>{charmStars}</p> 
      </div>
      <div className="kind-stats">
      <p>Kindness: </p>
      <p>{currentPrestige("Kindness",kindPrestige)}</p>
      <p>{kindStars}</p>
      </div>
      <div className="pro-stats">
       <p>Proficiency: </p>
      <p>{currentPrestige("Proficiency",proPrestige)}</p>
      <p>{proStars}</p> 
      </div>
    </section>
    <section id="YESection">
       <h2>Your Experience: </h2>
       <input value={searchText} onChange={event => setSearchText(event.target.value)} placeholder="Search Experiences"></input>
       <select value={historyFilter} onChange={event => setHistoryFilter(event.target.value)}>
        <option value="All">All</option>
        <option value="Knowledge">Knowledge</option>
        <option value="Guts">Guts</option>
        <option value="Charm">Charm</option>
        <option value="Kindness">Kindness</option>
        <option value="Proficiency">Proficiency</option>
       </select>
       <button onClick={() => setIsDeleting(previous => !previous)}>{isDeleting ? "Done" : "Delete"}</button>
       <button onClick={() => SetEdit(previous => !previous)}>{Edit ? "Done" : "Edit Experiences"}</button>
     {historyFilter === "All" && Experiences.filter(entry => entry.Text.toLowerCase().includes(searchText.toLowerCase())).map(entry => (
        <div key={entry.id} className="experience-row">
          <p>
            {editingId === entry.id ? (
              <input value={editText} onChange={event => setEditText(event.target.value)} />
            ) : entry.Text} - {entry.stat} + 1
            {isDeleting && (
              <button onClick={() => deleteExperience(entry.id)}>Delete</button>
            )}
            {Edit && (
              <button onClick={() => {
                setEditingId(entry.id)
                setEditText(entry.Text)
              }}>Edit</button>
            )}
            {editingId === entry.id && (
              <>
                <button onClick={saveExperience}>Save</button>
                <button onClick={() => {
                  setEditingId(null)
                  setEditText("")
                  SetAlertMessage("")
                }}>Cancel</button>
              </>
            )}
            <button
              onClick={() => theshowDetails(entry.id)}
              aria-expanded={detailsId === entry.id}
            >
              {detailsId === entry.id ? "Hide Details" : "Show Details"}
            </button>
          </p>
          {detailsId === entry.id && (
            <div className="experience-details">
              <p>Journal Entry: {entry.journal || "No journal yet."}</p>
              <p>
                Date and Time: {entry.CreatedAt && !Number.isNaN(new Date(entry.CreatedAt).getTime())
                  ? new Date(entry.CreatedAt).toLocaleString()
                  : "Date unavailable"}
              </p>
              <p>Stat Type: {entry.stat}</p>
            </div>
          )}
        </div>
      ))}
     {historyFilter === "All" && Experiences.length === 0 && <p>No Experiences Yet</p>}
     
     {historyFilter === "Knowledge" && Experiences.filter(entry => entry.stat === "Knowledge").filter(entry => entry.Text.toLowerCase().includes(searchText.toLowerCase())).map(entry => (
        <div key={entry.id} className="experience-row">
          <p>
            {entry.Text} - {entry.stat} + 1
            {isDeleting && (
              <button onClick={() => deleteExperience(entry.id)}>Delete</button>
            )}
            <button
              onClick={() => theshowDetails(entry.id)}
              aria-expanded={detailsId === entry.id}
            >
              {detailsId === entry.id ? "Hide Details" : "Show Details"}
            </button>
          </p>
          {detailsId === entry.id && (
            <div className="experience-details">
              <p>Journal Entry: {entry.journal || "No journal yet."}</p>
              <p>
                Date and Time: {entry.CreatedAt && !Number.isNaN(new Date(entry.CreatedAt).getTime())
                  ? new Date(entry.CreatedAt).toLocaleString()
                  : "Date unavailable"}
              </p>
              <p>Stat Type: {entry.stat}</p>
            </div>
          )}
        </div>
      ))}
     {historyFilter === "Knowledge" && Experiences.filter(entry => entry.stat === "Knowledge").length === 0 && <p>No Knowledge Experiences yet</p>}

     {historyFilter === "Guts" && Experiences.filter(entry => entry.stat === "Guts").filter(entry => entry.Text.toLowerCase().includes(searchText.toLowerCase())).map(entry => (
        <div key={entry.id} className="experience-row">
          <p>
            {entry.Text} - {entry.stat} + 1
            {isDeleting && (
              <button onClick={() => deleteExperience(entry.id)}>Delete</button>
            )}
            <button
              onClick={() => theshowDetails(entry.id)}
              aria-expanded={detailsId === entry.id}
            >
              {detailsId === entry.id ? "Hide Details" : "Show Details"}
            </button>
          </p>
          {detailsId === entry.id && (
            <div className="experience-details">
              <p>Journal Entry: {entry.journal || "No journal yet."}</p>
              <p>
                Date and Time: {entry.CreatedAt && !Number.isNaN(new Date(entry.CreatedAt).getTime())
                  ? new Date(entry.CreatedAt).toLocaleString()
                  : "Date unavailable"}
              </p>
              <p>Stat Type: {entry.stat}</p>
            </div>
          )}
        </div>
      ))}
     {historyFilter === "Guts" && Experiences.filter(entry => entry.stat === "Guts").length === 0 && <p>No Guts Experiences</p>}
     
     {historyFilter === "Charm" && Experiences.filter(entry => entry.stat === "Charm").filter(entry => entry.Text.toLowerCase().includes(searchText.toLowerCase())).map(entry => (
        <div key={entry.id} className="experience-row">
          <p>
            {entry.Text} - {entry.stat} + 1
            {isDeleting && (
              <button onClick={() => deleteExperience(entry.id)}>Delete</button>
            )}
            <button
              onClick={() => theshowDetails(entry.id)}
              aria-expanded={detailsId === entry.id}
            >
              {detailsId === entry.id ? "Hide Details" : "Show Details"}
            </button>
          </p>
          {detailsId === entry.id && (
            <div className="experience-details">
              <p>Journal Entry: {entry.journal || "No journal yet."}</p>
              <p>
                Date and Time: {entry.CreatedAt && !Number.isNaN(new Date(entry.CreatedAt).getTime())
                  ? new Date(entry.CreatedAt).toLocaleString()
                  : "Date unavailable"}
              </p>
              <p>Stat Type: {entry.stat}</p>
            </div>
          )}
        </div>
      ))}
     {historyFilter === "Charm" && Experiences.filter(entry => entry.stat === "Charm").length === 0 && <p>No Charm Experiences</p>}
   
     {historyFilter === "Kindness" && Experiences.filter(entry => entry.stat === "Kindness").filter(entry => entry.Text.toLowerCase().includes(searchText.toLowerCase())).map(entry => (
        <div key={entry.id} className="experience-row">
          <p>
            {entry.Text} - {entry.stat} + 1
            {isDeleting && (
              <button onClick={() => deleteExperience(entry.id)}>Delete</button>
            )}
            <button
              onClick={() => theshowDetails(entry.id)}
              aria-expanded={detailsId === entry.id}
            >
              {detailsId === entry.id ? "Hide Details" : "Show Details"}
            </button>
          </p>
          {detailsId === entry.id && (
            <div className="experience-details">
              <p>Journal Entry: {entry.journal || "No journal yet."}</p>
              <p>
                Date and Time: {entry.CreatedAt && !Number.isNaN(new Date(entry.CreatedAt).getTime())
                  ? new Date(entry.CreatedAt).toLocaleString()
                  : "Date unavailable"}
              </p>
              <p>Stat Type: {entry.stat}</p>
            </div>
          )}
        </div>
      ))}
     {historyFilter === "Kindness" && Experiences.filter(entry => entry.stat === "Kindness").length === 0 && <p>No Kindness Experiences</p>}
   
     {historyFilter === "Proficiency" && Experiences.filter(entry => entry.stat === "Proficiency").filter(entry => entry.Text.toLowerCase().includes(searchText.toLowerCase())).map(entry => (
        <div key={entry.id} className="experience-row">
          <p>
            {entry.Text} - {entry.stat} + 1
            {isDeleting && (
              <button onClick={() => deleteExperience(entry.id)}>Delete</button>
            )}
            <button
              onClick={() => theshowDetails(entry.id)}
              aria-expanded={detailsId === entry.id}
            >
              {detailsId === entry.id ? "Hide Details" : "Show Details"}
            </button>
          </p>
          {detailsId === entry.id && (
            <div className="experience-details">
              <p>Journal Entry: {entry.journal || "No journal yet."}</p>
              <p>
                Date and Time: {entry.CreatedAt && !Number.isNaN(new Date(entry.CreatedAt).getTime())
                  ? new Date(entry.CreatedAt).toLocaleString()
                  : "Date unavailable"}
              </p>
              <p>Stat Type: {entry.stat}</p>
            </div>
          )}
        </div>
      ))}
     {historyFilter === "Proficiency" && Experiences.filter(entry => entry.stat === "Proficiency").length === 0 && <p>No Proficiency Experiences</p>}
    </section>
  </main>
 ) 
}
