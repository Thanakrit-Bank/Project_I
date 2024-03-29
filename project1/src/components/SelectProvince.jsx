import React from 'react'

const all_P = 
[
'Amnat Charoen', 'Ang Thong', 
'Bangkok Metropolis', 'Bueng Kan', 'Buri Ram', 
'Chachoengsao', 'Chai Nat', 'Chaiyaphum', 'Chanthaburi', 'Chiang Mai', 'Chiang Rai', 'Chon Buri', 'Chumphon', 
'Kalasin', 'Kamphaeng Phet', 'Kanchanaburi', 'Khon Kaen', 'Krabi', 
'Lampang', 'Lamphun', 'Loei', 'Lop Buri', 
'Mae Hong Son', 'Maha Sarakham', 'Mukdahan', 
'Nakhon Nayok', 'Nakhon Pathom', 'Nakhon Phanom', 'Nakhon Ratchasima', 'Nakhon Sawan', 'Nakhon Si Thammarat', 'Nan', 'Narathiwat', 'Nong Bua Lam Phu', 'Nong Khai', 'Nonthaburi', 
'Pathum Thani', 'Pattani', 'Phangnga', 'Phatthalung', 'Phayao', 'Phetchabun', 'Phetchaburi', 'Phichit', 'Phitsanulok', 'Phra Nakhon Si Ayutthaya', 'Phrae', 'Phuket', 'Prachin Buri', 'Prachuap Khiri Khan', 
'Ranong', 'Ratchaburi', 'Rayong', 'Roi Et', 
'Sa Kaeo', 'Sakon Nakhon', 'Samut Prakan', 'Samut Sakhon', 'Samut Songkhram', 'Saraburi', 'Satun', 'Si Sa Ket', 'Sing Buri', 'Songkhla', 'Sukhothai', 'Suphan Buri', 'Surat Thani', 'Surin', 
'Tak', 'Trang', 'Trat', 
'Ubon Ratchathani', 'Udon Thani', 'Uthai Thani', 'Uttaradit', 
'Yala', 'Yasothon', 'Brunei', 'Cambodia', 'Malaysia', 'Indonesia', 'Laos', 'Myanmar'
, 'Philippines', 'Thailand', 'Timor-Leste', 'Vietnam'
]

function SelectProvince(props) {
  return (
    <select onChange={(e) => props.onChengeSelect(e.target.value)} className={'map-view select '.concat(props.class)}>
        <option value='all' defaultValue>All Province</option>
        {all_P.map((p, index) => {
            return <option value={p} key={index}>{p}</option>
        })}               
    </select>
)
}

export default SelectProvince