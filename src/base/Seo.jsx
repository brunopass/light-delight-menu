import {Helmet} from 'react-helmet'

const Seo = props => {

    const {title, description, color} = props

    return(
        <Helmet>
            <title>{title}</title>
            <meta name="theme-color" content={color} />
            <meta name="description" content={description}/>
        </Helmet>
    )

}

export default Seo