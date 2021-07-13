import './ReportInfo.css'


export default ({data}) => <div className='report-info'>

    <span className='title'>
        {data.title}
    </span>
    <span className='author'>
        Recorded {new Date(data.date).toLocaleDateString()} by
        <span> </span>
        <span className={data.faction}>
        {
            data.guild ? `<${data.guild}>` : data.owner
        }
        </span>
        <span> </span>
        <span>{data.server}</span>
    </span>
</div>
