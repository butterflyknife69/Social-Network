import s from './News.module.css';

const News = (props) => {
    return (
        <div>
            <div className={s.wraperContent}>
                <img className={s.imgNews} src='https://media4.s-nbcnews.com/i/newscms/2019_01/2705191/nbc-social-default_b6fa4fef0d31ca7e8bc7ff6d117ca9f4.png' alt="img" />
            </div>
            <div>
                <h1 className={s.hNews}>This is news</h1>
            </div>
        </div>
    )
}


export default News;