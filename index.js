const express = require ('express')
const app = express ()
let app_port = process.env.PORT
if (app_port == null || app_port == "")
{
    app_port = 3000
}

const nodemailer = require ('nodemailer')
var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "7047dbc17a1084",
        pass: "0471ce0cc505e4"
    }
});

const API_KEY = process.env.GOOGLE_API_KEY;             // take it from the file GOOGLE_API_KEY

const {google} = require ('googleapis')
const youtube = google.youtube ({
    version: 'v3',
    auth: API_KEY
})

const pug = require ('pug')

app.set('view engine', 'pug')
app.use (express.static ('static'))
app.use(express.urlencoded({ extended: true }))

app.get ('/', (req, res) => res.render ('index'))

app.post ('/send',  (req, res) => {
    youtube.videos.list ({
        part: 'snippet',
        id: req.body.m_video
    },
                         (err, results) => {
                             if (err)
                             {
                                 res.send ('Error')
                             }
                             else
                             {
                                 send_video_email (req.body,results.data.items[0])
                                 res.send ('Sent successfully')
                             }
                         })
})

function generate_video_email_html (reqbody,
                                    videolink,
                                    videoimgsrc)
{
    return pug.renderFile ('views/email.pug',
                           {
                               basedir: 'views',
                               m_message: reqbody.m_message,
                               m_to: reqbody.m_to,
                               m_from: reqbody.m_from,
                               m_videolink: videolink,
                               m_videoimgsrc: videoimgsrc
                           })
}

function generate_video_email_text (reqbody, videolink)
{
    return 'Video Greeting Card for ' + reqbody.m_to + '\n\n' +
        reqbody.m_message + '\n' +
        videolink + '\n\n- ' + reqbody.m_from
}

function send_video_email (reqbody, videodata)
{
    const videolink = 'https://www.youtube.com/watch?v=' + videodata.id
    transport.sendMail({
        from: reqbody.m_from_email,
        to: reqbody.m_to_email,
        subject: "You got a greeting card!",
        text: generate_video_email_text (reqbody, videolink),
        html: generate_video_email_html (reqbody, videolink, videodata.snippet.thumbnails.default.url)
    }, (err, info) => {
        if (err)
        {
            console.log (info)
        }
    })
}
app.listen (app_port, () => console.log (`listening on port ${app_port}`));
