import { Component, useState, useEffect, useCallback, useMemo } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
// class Slider extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             autoplay: false,
//             slide: 0
//         }
//     }

//     componentDidMount() {
//         document.title = `Slide: ${this.state.slide}`;
//     }

//     componentDidUpdate() {
//         document.title = `Slide: ${this.state.slide}`;
//     }

//     changeSlide = (i) => {
//         this.setState(({ slide }) => ({
//             slide: slide + i
//         }))
//     }

//     toggleAutoplay = () => {
//         this.setState(({ autoplay }) => ({
//             autoplay: !autoplay
//         }))
//     }

//     render() {
//         return (
//             <Container>
//                 <div className="slider w-50 m-auto">
//                     <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
//                     <div className="text-center mt-5">Active slide {this.state.slide} <br /> {this.state.autoplay ? 'auto' : null}</div>
//                     <div className="buttons mt-3">
//                         <button
//                             className="btn btn-primary me-2"
//                             onClick={() => this.changeSlide(-1)}>-1</button>
//                         <button
//                             className="btn btn-primary me-2"
//                             onClick={() => this.changeSlide(1)}>+1</button>
//                         <button
//                             className="btn btn-primary me-2"
//                             onClick={this.toggleAutoplay}>toggle autoplay</button>
//                     </div>
//                 </div>
//             </Container>
//         )
//     }
// }

const countTotal = (num) => {
    console.log('counting...');
    return num + 10;
}

const Slider = (props) => {

    const [slide, setSlide] = useState(0);
    const [autoplay, setAutoplay] = useState(false);
    // const [state, setState] = useState({ slide: 0, autoplay: false })

    const getSomeImages = useCallback(() => {
        console.log('fetching')
        return [
            "https://yandex-images.clstorage.net/GQgK51172/439ff8LL/J2fwqZjpG3A122b-r6WzJts2ymdFXuWZAAm5rRtjFxmXw3jQyd-ACEn0-aqtRxDEIRi4YxGgurIdWcDo9upzGuIT0O2sLU8hsC5SjzrlMxaLFx-zdE8gOUXYHYjehzLpZzPtxn8oEn9fJl8dOiCyQMQNPbZwZGvWzv8Rz_HaNS7E1HCY-qgbBhSaJIkPByNWG3WeldWvkzu3iqsJvWRmO2OFqdVNmYD_jqWMb7nw0JEUDO0Ws0OYhdxNtW0CCzVst8Xy6HtpqrYmm0V4rEawpignbiTHbUALJKlLWY52RDth93tlLUhyz74kzC8YstLgRmx9tJHByoUcXsTvwXimbEeE09vKuCnWlhvXuHzlg2f59swVZR_hCoe7iPhetrR7oCX4BCzIgA5fd-6_SpEg8dZNnsRTMZhnDZ5HDTPLVE23FtGpy3lIprfJV9neFrE3iHQvF7WMIyl3G1uYLTT0SLJmmaXP6FMdbOc-TvvxYhJU7O5kMnL5lN8tlswh63a_JjRTOkgJCUWl-lWI_KThJboXryUEnrGr17sau592VUqAl7uk_cqwfG1X_a74sGLhJu8vxFHx-nUOX7dNMBg1HzR1AShbepl1hCl3eNxXYteLhB2GlC6SaxcJOTmvZZRrsnaYlv7pEF08Nk18mVDQgMcejGYzA_rVT5-2vyG4FpyFFCJKKDl55-ZKdrqOV9OUy0Qf9yesk-uF2UuJXIVWKhCVWudPynB-3hWdbQghM6DUD72kEUJIBd6sNK0TSPYNBebyC5hYehRFecaafCUBRikFnbcVn-EZdHua6n0FFwoRR_mkjUsCXexGDM46g2JT1K6PlJDiy-a-TdcNwZq2nFcGEkqai2i2xekXmz8H0YcaRV8ktm6hOJd5WQrcBRVrkJQKhQxI8g1ONg7e2ANQAecsnHQQkrgV__6XfiGK9560RAKY6lkYhiaYN9oeJ0HWK_WM9xZOMRv1W8tJz3Z1w",
            "https://avatars.mds.yandex.net/i?id=0391f314abe6f64bcc601738b6a4f828b809d9de-5450841-images-thumbs&n=13"
        ]
    }, []);

    // function logging() {
    //     console.log('log!');
    // }

    // useEffect(() => {
    //     console.log('effect');
    //     document.title = `Slide: ${slide}`;


    // }, [slide]);

    // useEffect(() => {
    //     console.log('autoplay')
    // }, [autoplay])


    // function changeSlide(i) {
    //     setState(state => ({ ...state, slide: state.slide + i }));

    // }

    // function toggleAutoplay() {
    //     setState(state => ({...state, autoplay: !state.autoplay}));
    // }


    function changeSlide(i) {
        setSlide(slide => slide + i);

    }

    function toggleAutoplay() {
        setAutoplay(autoplay => !autoplay);
    }

    const total = useMemo(() => {
        return countTotal(slide);
    }, [slide]);

    const style = useMemo(() => ({
        color: slide > 4 ? 'red' : 'black'
    }), [slide])

    useEffect(() => {
        console.log('styles!')
    }, [style]);

    return (
        <Container>
            <div className="slider w-50 m-auto">


                <Slide getSomeImages={getSomeImages}/>

                <div className="text-center mt-5">Active slide {slide} <br /> {autoplay ? 'auto' : null}</div>
                <div style={style} className="text-center mt-5">Total slides: {total}</div>

                <div className="buttons mt-3">
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(-1)}>-1</button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(1)}>+1</button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={toggleAutoplay}>toggle autoplay</button>
                </div>
            </div>
        </Container>
    )
}

const Slide = ({getSomeImages}) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        setImages(getSomeImages())
    }, [getSomeImages])

    return (
        <>
            {images.map((url, i) => <img key={i} className="d-block w-100" src={url} alt="slide" />)}
        </>
    )
}

function App() {
    const [slider, setSlider] = useState(true);

    return (
        <>
            <button onClick={() => setSlider(false)}>Click</button>
            {slider ? <Slider /> : null}
        </>
    );
}

export default App;
