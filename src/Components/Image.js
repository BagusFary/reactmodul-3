import react, {Component} from 'react';
//function statefull untuk merender gambar menggunakan props
class Image extends Component {
    render() {
        return (
            <>
            <img src={ this.props.linkGambar} alt="Food" width='500'/>
            </>
        )
    }
}
export default Image;