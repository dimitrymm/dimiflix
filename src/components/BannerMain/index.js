import React from 'react'
import VideoIframeResponsive from './components/VideoIframeResponsive';
import { BannerMainContainer, ContentAreaContainer, WatchButton } from './styled';

const getYouTubeId = (youtubeURL) => {
    return youtubeURL.replace(
        /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
        '$7',
    );
}

export default function BannerMain({
    videoTitle,
    videoDescription,
    url,
}) {
    getYouTubeId(url);
    const bgUrl = `https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`;

    return (
        <BannerMainContainer backgroundImage={bgUrl}>
            <ContentAreaContainer>
                <ContentAreaContainer.Item>
                    <ContentAreaContainer.Title>
                        {videoTitle}
                    </ContentAreaContainer.Title>

                    <ContentAreaContainer.Description>
                        {videoDescription}
                    </ContentAreaContainer.Description>
                </ContentAreaContainer.Item>

                <ContentAreaContainer.Item>
                    <VideoIframeResponsive
                        youTubeID={youTubeID}
                    />
                    <WatchButton>
                        Assistir
                </WatchButton>
                </ContentAreaContainer.Item>
            </ContentAreaContainer>
        </BannerMainContainer>
    )
}