import { Flex } from "antd";
import { EmailIcon, EmailShareButton, FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, TelegramIcon, TelegramShareButton, WhatsappIcon, WhatsappShareButton } from "react-share";
import './share-image.css'

function ShareImage({shareUrl}: {shareUrl: string}) {
    return (
        <Flex vertical style={{zIndex: 2}}>
          <LinkedinShareButton className="share" children={<LinkedinIcon />} url={shareUrl}/>
          <EmailShareButton className="share" children={<EmailIcon />} url={shareUrl}/>
          <TelegramShareButton className="share" children={<TelegramIcon />} url={shareUrl}/>
          <FacebookShareButton className="share" children={<FacebookIcon />} url={shareUrl}/>
          <WhatsappShareButton className="share" children={<WhatsappIcon />} url={shareUrl}/>
        </Flex>
    )
}

export {ShareImage}