'use client'
import React from 'react';

const ChatApp = () => {
  return (
    <div className="d-flex vh-100 bg-light">
      <div className="flex-shrink-0 bg-white border-end overflow-auto" style={{ width: '16rem', overflowX: 'hidden', display : 'none' }}>
        <button
          type="button"
          className="btn btn-light d-inline-flex align-items-center p-2 mt-2 ms-3 text-secondary border-0 rounded sm-hidden"
          data-bs-toggle="offcanvas"
          data-bs-target="#logoSidebar"
          aria-controls="logoSidebar"
        >
          <span className="visually-hidden">Open sidebar</span>
          <svg
            className="bi bi-list"
            width="24"
            height="24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
          >
            <path fillRule="evenodd" d="M2 4.75a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 4a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H2.75A.75.75 0 012 8.75zm0 4a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H2.75A.75.75 0 012 12.75z" />
          </svg>
        </button>
        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="logoSidebar"
          aria-labelledby="logoSidebarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="logoSidebarLabel">Scrollink</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="d-flex align-items-center p-3 bg-white border-bottom text-decoration-none text-dark rounded">
                  <div className="me-3">
                    <div className="bg-primary rounded-circle" style={{ width: '40px', height: '40px' }}></div>
                  </div>
                  <div className="flex-grow-1">
                    <div className="fw-semibold">John Doe</div>
                    <div className="text-muted small">Active now</div>
                  </div>
                  <span className="badge bg-primary text-white ms-auto">3</span>
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="d-flex align-items-center p-3 bg-white border-bottom text-decoration-none text-dark rounded">
                  <div className="me-3">
                    <div className="bg-primary rounded-circle" style={{ width: '40px', height: '40px' }}></div>
                  </div>
                  <div className="flex-grow-1">
                    <div className="fw-semibold">Umair Sheikh</div>
                    <div className="text-muted small">Active now</div>
                  </div>
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="d-flex align-items-center p-3 bg-white border-bottom text-decoration-none text-dark rounded">
                  <div className="me-3">
                    <div className="bg-primary rounded-circle" style={{ width: '40px', height: '40px' }}></div>
                  </div>
                  <div className="flex-grow-1">
                    <div className="fw-semibold">John Doe</div>
                    <div className="text-muted small">last seen 10 minutes ago</div>
                  </div>
                  <span className="badge bg-primary text-white ms-auto">13</span>
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="d-flex align-items-center p-3 bg-white border-bottom text-decoration-none text-dark rounded">
                  <div className="me-3">
                    <div className="bg-primary rounded-circle" style={{ width: '40px', height: '40px' }}></div>
                  </div>
                  <div className="flex-grow-1">
                    <div className="fw-semibold">Alex</div>
                    <div className="text-muted small">last seen 2 minutes ago</div>
                  </div>
                  <span className="badge bg-primary text-white ms-auto">1</span>
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="d-flex align-items-center p-3 bg-white border-bottom text-decoration-none text-dark rounded">
                  <div className="me-3">
                    <div className="bg-primary rounded-circle" style={{ width: '40px', height: '40px' }}></div>
                  </div>
                  <div className="flex-grow-1">
                    <div className="fw-semibold">Bilal Ahmed</div>
                    <div className="text-muted small">Active now</div>
                  </div>
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="d-flex align-items-center p-3 bg-white border-bottom text-decoration-none text-dark rounded">
                  <div className="me-3">
                    <div className="bg-primary rounded-circle" style={{ width: '40px', height: '40px' }}></div>
                  </div>
                  <div className="flex-grow-1">
                    <div className="fw-semibold">Sami Hassan</div>
                    <div className="text-muted small">last seen 2 hours ago</div>
                  </div>
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="d-flex align-items-center p-3 bg-white border-bottom text-decoration-none text-dark rounded">
                  <div className="me-3">
                    <div className="bg-primary rounded-circle" style={{ width: '40px', height: '40px' }}></div>
                  </div>
                  <div className="flex-grow-1">
                    <div className="fw-semibold">Saad Baig</div>
                    <div className="text-muted small">last seen 10 minutes ago</div>
                  </div>
                  <span className="badge bg-primary text-white ms-auto">17</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column flex-grow-1">
        <div className="p-4 bg-white border-bottom d-flex align-items-center">
          <div className="bg-primary rounded-circle" style={{ width: '40px', height: '40px' }}></div>
          <div className="ms-3">
            <div className="fw-semibold">John Doe</div>
            <div className="text-muted small">Active now</div>
          </div>
        </div>
        <div className="flex-grow-1 p-4 overflow-auto">
        </div>
        <div className="p-4 bg-white border-top d-flex align-items-center">
          <input
            type="text"
            placeholder="Type a message..."
            className="form-control flex-grow-1"
          />
          <button className="btn btn-primary ms-2">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
