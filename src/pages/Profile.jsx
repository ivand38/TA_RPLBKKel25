import React, { useState } from 'react';
import './Profile.css';
import ButtonAppBar from '../components/Navbar';

function Profile() {
  const [user, setUser] = useState([{
    id: 1,
    name: 'Ivan Danisworo Abadi',
    nim: '21120120130059',
    github: 'https://github.com/ivand38',
    profilePicture: 'https://placekitten.com/200/200'
  },
  {
    id: 2,
    name: 'Septian Agung Maulana',
    nim: '21120120140129',
    github: 'https://github.com/Septagung23',
    profilePicture: 'https://placekitten.com/200/200'
  },
  {
    id: 3,
    name: 'Muhammad Farhan Ashari',
    nim: '21120120130072',
    github: 'https://github.com/FarhanAshari23',
    profilePicture: 'https://placekitten.com/200/200'
  },
  {
    id: 4,
    name: 'Pramudita Prabaswara Suwardana Sudrajat',
    nim: '21120120130043',
    github: 'https://github.com/Pramuditapss',
    profilePicture: 'https://placekitten.com/200/200'
  }]);

  return (
    <div className="Profile">
      <header className="App-header">
        <ButtonAppBar />
        <ProfileCard user={user} />
      </header>
    </div>
  );
}

const ProfileCard = ({ user }) => {
  return (
    <>
      {user.map((item, index) => (
        <div className="profile-card" key={index}>
          <img src={item.profilePicture} alt="Profile" />
          <h2 className="profile-name">{item.name}</h2>
          <h4 className='profile-name'>NIM: {item.nim}</h4>
          <a href={item.github} target="_blank" className='profile-github'>Github: {item.github}</a>
        </div>
      ))}
    </>
  );
};


export default Profile;