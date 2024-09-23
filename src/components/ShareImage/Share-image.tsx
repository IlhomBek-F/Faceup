import { Flex } from "antd";
import { EmailIcon, EmailShareButton, FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, TelegramIcon, TelegramShareButton, WhatsappIcon, WhatsappShareButton } from "react-share";
import './share-image.css'
import React from "react";

function ShareImage({ shareUrl }: { shareUrl: string }) {
  return (
    <Flex vertical style={{ zIndex: 2 }}>
      <LinkedinShareButton className="share in" children={<LinkedinIcon />} url={shareUrl} />
      <EmailShareButton className="share email" children={<EmailIcon />} url={shareUrl} />
      <TelegramShareButton className="share telegram" children={<TelegramIcon />} url={shareUrl} />
      <FacebookShareButton className="share meta" children={<FacebookIcon />} url={shareUrl} />
      <WhatsappShareButton className="share whatsapp" children={<WhatsappIcon />} url={shareUrl} />
    </Flex>
  )
}

export { ShareImage }