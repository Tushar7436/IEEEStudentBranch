import "../Assets/styles/OurTeam.css";
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import img1 from '../Assets/images/Teamsection/Ankur.png';
import img2 from '../Assets/images/Teamsection/vc.png';
import img3 from '../Assets/images/Teamsection/Dean.png';
import img4 from '../Assets/images/Teamsection/Pallabi.png';
import img5 from '../Assets/images/Teamsection/registrar.png';
import React, { useState } from 'react';
import 'react-horizontal-scrolling-menu/dist/styles.css';


const teamData = [
  { src: img3, alt: 'Dean', name: 'Dr.M SURESH', title: 'Dean', description: 'Dr. M Suresh has completed his PhD in Digital Design from SUIIT, India in 2021. He holds a Master’s in Engineering (ME) from Jadavpur University and Bachelor’s in Engineering (BE) from Andhra University in ECE.' },
  { src: img1, alt: 'Dr. Ankur', name: 'Dr.ANKUR BEOHAR', title: 'Assistant Professor', description: 'Dr. Ankur Beohar is an Assistant Professor in ECE Department of School of Electrical and Electronics Engineering, VIT Bhopal University, India.' },
  { src: img2, alt: 'VICE-CHANCELLOR', name: 'Dr.Senthil Kumar Arumugam', title: 'VICE-CHANCELLOR', description: 'Dr. Senthil Kumar Arumugam has been serving at VIT Vellore since 1992. He has taught a range of subjects from Thermodynamics, Thermal Engineering, Fluid Mechanics, Heat Transfer, CFD, Cryogenics to Renewable Energy at both undergraduate and post graduate levels.' },
  { src: img4, alt: 'Dr.Pallabi Sakar', name: 'Dr. PALLABI SARKAR', title: 'Assistant Professor', description: 'Dr. Ankur Beohar is an Assistant Professor in ECE Department of School of Electrical and Electronics Engineering, VIT Bhopal University, India.' },
  { src: img5, alt: 'Wing Commander (Dr) Debashis Adhikari (R)', name: 'Dr.Debashis Adhikari', title: 'Registrar', description: 'Wing Commander (Dr) Debashis Adhikari (R) is a BTech from Institute of Radio Physics & Electronics, Calcutta University, ME from Pune University and obtained his PhD in Wireless Communication from the Defense Institute of Advanced Technology (DRDO), Pune. ' },
];

export const OurTeam = () => {
  const [selectedMember, setSelectedMember] = useState(teamData[2]);

  return (
    <div className="OurTeam">
      <div className="OurTeam_heading">
        <p> Organising <br />Committee</p>
        <div>"This event is possible only because of the dedicated faculty of the VIT Bhopal IEEE Student Branch."</div>
      </div>
      <div className="Team_images">
        <ScrollMenu>
          {teamData.map((member, index) => (
            <div className="team-item" key={index}>
              <button onClick={() => setSelectedMember(member)}>
                <img src={member.src} alt={member.alt} className="team-image" />
                <p>{member.name}</p>
                <p>{member.title}</p>
              </button>
            </div>
          ))}
        </ScrollMenu>
      </div>
      {selectedMember && (
        <div className="Team_info">
          <img src={selectedMember.src} alt={selectedMember.alt} className="selected-image" />
          <div className="member-details">
            <h3 className="member-name">{selectedMember.name}</h3>
            <p className="member-title">{selectedMember.title}</p>
            <p className="member-description">{selectedMember.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};
