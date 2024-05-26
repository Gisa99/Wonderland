import React, { useState } from 'react';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import GradeIcon from '@mui/icons-material/Grade';
import CookieOutlinedIcon from '@mui/icons-material/CookieOutlined';
import CookieIcon from '@mui/icons-material/Cookie';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const Reacoes = () => {
    const [iconePreenchido, setIconePreenchido] = useState({
        grade: false,
        cookie: false,
        nearMe: false,
        bookmark: false
    });

    const toggleIcone = (icone) => {
        setIconePreenchido({
            ...iconePreenchido,
            [icone]: !iconePreenchido[icone]
        });
    };

    return (
        <div className='flex items-center justify-between p-2 mb-3 bg-white rounded-bl rounded-br'>
            <div>
                {iconePreenchido.grade ? (
                    <GradeIcon sx={{ fontSize: 35, color: 'rgb(214, 214, 10)', cursor: 'pointer' }} onClick={() => toggleIcone('grade')} />
                ) : (
                    <GradeOutlinedIcon sx={{ fontSize: 35, color: 'rgb(214, 214, 10)', cursor: 'pointer' }} onClick={() => toggleIcone('grade')} />
                )}
                {iconePreenchido.cookie ? (
                    <CookieIcon sx={{ fontSize: 35, color: '#F2913D', cursor: 'pointer' }} onClick={() => toggleIcone('cookie')} />
                ) : (
                    <CookieOutlinedIcon sx={{ fontSize: 35, color: '#F2913D', cursor: 'pointer' }} onClick={() => toggleIcone('cookie')} />
                )}
                
                <NearMeOutlinedIcon sx={{ fontSize: 35, color: '#BF3B91', cursor: 'pointer' }} />
            
            </div>
            <div>
                {iconePreenchido.bookmark ? (
                    <BookmarkIcon sx={{ fontSize: 35, color: '#351C59', cursor: 'pointer' }} onClick={() => toggleIcone('bookmark')} />
                ) : (
                    <BookmarkBorderOutlinedIcon sx={{ fontSize: 35, color: '#351C59', cursor: 'pointer' }} onClick={() => toggleIcone('bookmark')} />
                )}
            </div>
        </div>
    );
}

export default Reacoes;
