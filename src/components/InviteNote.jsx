import React from "react";
import "../styles/InviteNote.css";

function InviteNote() {
    return (
        <section id="invite-note">
            <div className="from">
                <h5>An Invitation from:</h5>
                <h2>Mr. & Mrs. Shaikh Hussain Sahab</h2>
                <h5 >
                    <strong>Lorry Owner</strong>, Adoni.
                </h5>
                <h5 className="mt-3">
                    H.No.: 22/275, Opposite Roza -e- Chanda Hussaini Masjid,
                    <br />Karvanpet, Adoni,
                    <br />
                    Kurnool Dist., AP - 518 301.
                </h5>
                <p className="address">
                    Contact: +91 98663 37529, <br />
                    +91 93939 31511.
                </p>
            </div>
        </section>
    );
}

export default InviteNote;
