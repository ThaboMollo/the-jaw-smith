import React from 'react';
import './HomeSlider.css';

class Slide extends React.Component {
    render() {
        let slideStyle = { backgroundImage: `url( ${this.props.background})` };
        return (
            <div
                className="slider__slide"
                data-active={this.props.active}
                style={slideStyle}
                onClick={this.props.clicked}
            >
                <div className="slider__slide__text">
                    <p>
                    {this.props.text}
                    </p>
                </div>
            </div>
        );
    }
}

class HomeSlider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeSlide: 0,
            interval: 3,
            autoplay: true,
            slides: [
                {
                    background: "/img/green-apples.jpg",
                    text: "An Apple A day ..."
                },
                {
                    background: "/img/coal.jpg",
                    text: "Is coal really good for your teeth?"
                },
                {
                    background: "/img/smile.jpg",
                    text: "How to brightten your smile?"
                }
            ]
        };
    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            if (this.state.autoplay) {
                this.nextSlide();
            }
        }, this.state.interval * 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    pause() {
        this.setState({ autoplay: false });
    }

    resume() {
        this.setState({ autoplay: true });
    }

    prevSlide() {
        let slide = this.state.activeSlide - 1 < 0
            ? this.state.slides.length - 1
            : this.state.activeSlide - 1;
        this.setState({
            activeSlide: slide
        });
    }

    nextSlide() {
        let slide = this.state.activeSlide + 1 < this.state.slides.length
            ? this.state.activeSlide + 1
            : 0;
        this.setState({
            activeSlide: slide
        });
    }

    render() {
        return (
            <div id='homeSlider' onMouseEnter={this.pause.bind(this)} onMouseLeave={this.resume.bind(this)}>
                {this.state.slides.map((slide, index) => {
                    return (
                        <Slide
                            background={slide.background}
                            text={slide.text}
                            active={index === this.state.activeSlide}
                            key={index}
                        />
                    );
                })}
                <div className="rightArrow" onClick={this.nextSlide.bind(this)}><i className="fa fa-angle-double-right"></i></div>
                <div className="leftArrow" onClick={this.prevSlide.bind(this)}> <i className="fa fa-angle-double-left"></i></div>
            </div>
        );
    }
}

export default HomeSlider;