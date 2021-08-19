import React from 'react'
import '../../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
 const Footer = () => {
    return (
        <>
        <footer className="text-center text-white" Style="background-color: #f1f1f1;">
            {/* <!-- Grid container --> */}
            <div className="container pt-4">
                {/* <!-- Section: Social media --> */}
                <section className="mb-4">
                {/* <!-- Facebook --> */}
                <a
                    className="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="https://www.facebook.com/maDGamE.harisH07/"
                    role="button"
                    data-mdb-ripple-color="dark">
                    <i className="fab fa-facebook-f"></i>
                </a>

                {/* <!-- Twitter --> */}
                <a
                    className="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="https://twitter.com/@Cheenu_Harish"
                    role="button"
                    data-mdb-ripple-color="dark"
                    ><i className="fab fa-twitter"></i>
                    </a>

                {/* <!-- Google --> */}
                <a
                    className="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=harishcheenu1234@gmail.com&su=&body="
                    role="button"
                    data-mdb-ripple-color="dark"
                    ><i className="far fa-envelope"></i>
                    </a> 

                {/* <!-- Instagram -->
                <a
                    className="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="https://www.instagram.com/cheenu.harish/"
                    role="button"
                    data-mdb-ripple-color="dark"
                    ><i className="fab fa-instagram"></i>
                    </a>

                {/* <!-- Linkedin --> */}
                <a
                    className="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="https://www.linkedin.com/in/harish-narayananasamy-1bb16b160"
                    role="button"
                    data-mdb-ripple-color="dark"
                    ><i className="fab fa-linkedin"></i>
                    </a>
                {/* <!-- Github --> */}
                <a
                    className="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="https://github.com/CheenuHarish"
                    role="button"
                    data-mdb-ripple-color="dark"
                    ><i className="fab fa-github"></i>
                    </a>
                </section>
                {/* <!-- Section: Social media --> */}
            </div>
            {/* <!-- Grid container --> */}

           
            <div className="text-center text-dark p-3" Style="background-color: rgba(0, 0, 0, 0.2);">
                Made With 💖 By Harish N
            </div>
            
        </footer>
            
        </>
    )
}
export default Footer;