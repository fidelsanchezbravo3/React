import PropTypes from 'prop-types';

// const getSaludo = (nombre) => `Hola ${nombre}`;

export const FirstApp = ( { title, subTitle, name } ) => {
    return ( 
        <>
            {/* <h1>{ getSaludo('Fidel') }</h1> */}
            <h1 data-testid="test-title"> { title } </h1>
            <p>{ subTitle }</p>
            <p>{ subTitle }</p>
            <p>{ name }</p>
            {/* <h1>{ JSON.stringify( newMessage ) }</h1>  */}
        </>
    );
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string
}

FirstApp.defaultProps = {
    // title: 'No hay titulo',
    subTitle: 'No hay subtitulo',
    name: 'Fidel Sanchez'
}