import React, {Component} from 'react';
import googlePlayBadge from '../assets/image/google-play-badge.png';

const styles = {
    container: {
        width: "100%",
        textAlign: "center"
    }
};

export default class PlayStoreBadge extends Component {
    render() {
        return (
            <div style={styles.container}>
                <a href='https://play.google.com/store/apps/details?id=io.harry.zealot&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                    <img style={{width: "35vh"}} alt='다운로드하기 Google Play' src={googlePlayBadge}/>
                </a>
            </div>
        )
    }
}
