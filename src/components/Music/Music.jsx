import s from './Music.module.css';

const Music = (props) => {
    const videoUrl = 'https://serv1.freehat.cc/cdn_oilsnctw/sp/2606/2606_par.m3u8';
    return (
        <div>
            <div>
                <h2>Відеопрогравач</h2>
                <video webkit-airplay="allow" width="640" height="360" controls>
                    <source src={videoUrl} type="video/mp4" />
                </video>
            </div>

        </div>
    )
}

export default Music;
 
