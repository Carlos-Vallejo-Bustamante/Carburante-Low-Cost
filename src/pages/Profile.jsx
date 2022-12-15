import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/auth.context'

const Profile = () => {
    const { user } = useContext(AuthContext)
    return (
        <section className="h-100 gradient-custom-2">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-lg-9 col-xl-12">
                        <div className="card">
                            <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '200px' }}>
                                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                                        alt="" className="img-fluid img-thumbnail mt-4 mb-2 index-profile"
                                        style={{ width: '150px' }} />
                                    <Link className="btn btn-dark index-profile" data-mdb-ripple-color="dark" to='/edit-profile'>
                                        Edit profile
                                    </Link>
                                </div>
                                <div className="ms-3" style={{ marginTop: '130px' }}>
                                    <h5>{user?.name}</h5>
                                    <p>{user?.email}</p>
                                </div>
                            </div>
                            <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                                <div className="d-flex justify-content-end text-center py-1">
                                    <div>
                                        <p className="mb-1 h5">253</p>
                                        <p className="small text-muted mb-0">Photos</p>
                                    </div>
                                    <div className="px-3">
                                        <p className="mb-1 h5">1026</p>
                                        <p className="small text-muted mb-0">Followers</p>
                                    </div>
                                    <div>
                                        <p className="mb-1 h5">478</p>
                                        <p className="small text-muted mb-0">Following</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body p-4 text-black">
                                <div className="mb-5">
                                    <p className="lead fw-normal mb-1">About</p>
                                    <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                                        <p className="font-italic mb-1">Web Developer</p>
                                        <p className="font-italic mb-1">Lives in New York</p>
                                        <p className="font-italic mb-0">Photographer</p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <p className="lead fw-normal mb-0">Gasolineras favoritas</p>
                                </div>
                                <div className="row g-2">
                                    <div className="col mb-2">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                                            alt="" className="w-100 rounded-3" />
                                    </div>
                                    <div className="col mb-2">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                                            alt="" className="w-100 rounded-3" />
                                    </div>
                                </div>
                                <div className="row g-2">
                                    <div className="col">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                                            alt="" className="w-100 rounded-3" />
                                    </div>
                                    <div className="col">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                                            alt="" className="w-100 rounded-3" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile