const AboutSkin = () => {
    return(
        <div className="md:p-[140px] py-[45px] px-[15px]  text-white " style={{backgroundImage : `url("https://static.wixstatic.com/media/2e2a49_37afad752477458cbc7a9b205e02caae~mv2.jpg/v1/fill/w_2238,h_889,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/2e2a49_37afad752477458cbc7a9b205e02caae~mv2.jpg")`}}>
        <div className="max-w-[1000px] md:flex m-auto items-center">
            <div>
            <p className="md:text-[20px] text-[14px] md:text-left text-center">WE BELIEVE</p>
                <h1 className="md:text-[50px] text-[25px] md:text-left text-center">Your Skin <br/> Comes First</h1>
            </div>
            <div className="max-w-[500px] m-auto md:text-[20px] text-14px md:text-left text-center">
                <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p><br/>
                <p>This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.</p>
            </div>
            </div>
        </div>
    )
}
export default AboutSkin