import Anchor from "./AnchorTag"

export default function Footer() {
    return (
        <div>
            <div>
                <h2>Made with Rohit & Kurumi</h2>
            </div>
            <div className='flex space-x-4 my-7'>
                {/* reusable Anchor tag */}

                <Anchor href={'https://www.linkedin.com/in/bhupendragangwar/'}>
                    <FaLinkedin />
                </Anchor>
                <Anchor href={'https://github.com/bhupendragangwar'}>
                    <FaGithub />
                </Anchor>
                <Anchor href={'https://github.com/bhupendragangwar'}>
                    <FaInstagram />
                </Anchor>

            </div>
        </div>
    )
}