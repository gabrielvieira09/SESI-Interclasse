import React from 'react';

// Componente para exibir um time
const TimeCard = ({ time }) => {
  return (
    <div style={{ display:'flex', alignItems:'center',border: '1px solid #ddd', borderRadius: '9px', padding: '15px', margin: 'auto', marginBottom: '80px',marginLeft:'15px', marginRight:'20px', gap:'20px', borderWidth:'2px', boxShadow:'3.5px 5px #ddd'}}>
      <img src={time.image} style={{width: '135px'}}></img>
      <div style={{ padding: '4px'}}>
      <p>Classificação: {time.rank}</p>
      <p>Pontos: {time.wins}</p>
      </div>
    </div>
  );
};

export default TimeCard;