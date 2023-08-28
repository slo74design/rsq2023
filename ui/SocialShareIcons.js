import React from "react";
import {
    EmailShareButton,
    FacebookShareButton,
    LineShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,
} from "react-share";

import {
    EmailIcon,
    FacebookIcon,
    LineIcon,
    TelegramIcon,
    TwitterIcon,
    WhatsappIcon,
} from "react-share";

// Integration con GA4
import * as ga from "../lib/ga";

const SocialShareIcons = ({ detailPost }) => {
    return (
        <div className="flex flex-row items-center justify-center">
            <FacebookShareButton
                quote={detailPost.pTitle}
                hashtag="#escapada"
                url={detailPost.pUri}
                className="mr-2"
                onClick={() => {
                    ga.event({
                        action: "share",
                        params: {
                            event_label: detailPost.pTitle,
                            event_category: "Share on Facebook",
                        },
                    });
                }}
            >
                <FacebookIcon size={36} round={true} />
            </FacebookShareButton>
            <TwitterShareButton
                title={detailPost.pTitle}
                hashtags={["disenoweb, rsqweb"]}
                via="remotesquid"
                related={["rsqweb"]}
                url={detailPost.pUri}
                className="mr-2"
                onClick={() => {
                    ga.event({
                        action: "share",
                        params: {
                            event_label: detailPost.pTitle,
                            event_category: "Share on Twitter",
                        },
                    });
                }}
            >
                <TwitterIcon size={36} round={true} />
            </TwitterShareButton>
            <LineShareButton
                title={detailPost.pTitle}
                url={detailPost.pUri}
                className="mr-2"
                onClick={() => {
                    ga.event({
                        action: "share",
                        params: {
                            event_label: detailPost.pTitle,
                            event_category: "Share on Line",
                        },
                    });
                }}
            >
                <LineIcon size={36} round={true} />
            </LineShareButton>
            <TelegramShareButton
                title={detailPost.pTitle}
                url={detailPost.pUri}
                className="mr-2"
                onClick={() => {
                    ga.event({
                        action: "share",
                        params: {
                            event_label: detailPost.pTitle,
                            event_category: "Share on Telegram",
                        },
                    });
                }}
            >
                <TelegramIcon size={36} round={true} />
            </TelegramShareButton>
            <WhatsappShareButton
                title={detailPost.pTitle}
                url={detailPost.pUri}
                className="mr-2"
                onClick={() => {
                    ga.event({
                        action: "share",
                        params: {
                            event_label: detailPost.pTitle,
                            event_category: "Share on Whatsapp",
                        },
                    });
                }}
            >
                <WhatsappIcon size={36} round={true} />
            </WhatsappShareButton>
            <EmailShareButton
                subject="Escapada interesante en depaseopormanhattan.com"
                body={detailPost.pTitle}
                url={detailPost.pUri}
                className="mr-2"
            >
                <EmailIcon size={36} round={true} />
            </EmailShareButton>
        </div>
    );
};

export default SocialShareIcons;
