import React, { useState } from 'react'

function AddDreamForm({ list, dreams, setDreams }) {
    const [errors, setErrors] = useState([])
    const [dreamFormData, setDreamFormData] = useState({
        dream: '',
        category: '',
        status: '',
        due: '',
        list_id: list.id
    })

    const initialFormState = ({
        dream: '',
        category: '',
        status: '',
        due: '',
        list_id: ''
    })

    function onCreateDream(newDream) {
        setDreams([...dreams, newDream])
    }

    function handleSubmit(e){
        e.preventDefault()
        setErrors([])

        const newDream = {
            dream: dreamFormData.dream,
            category: dreamFormData.category,
            status: dreamFormData.status,
            due: dreamFormData.due,
            list_id: dreamFormData.list_id
        }

        fetch(`/dreams`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newDream),
        })
        .then((r) => {
            if (r.ok) {
              r.json().then((dream) => onCreateDream(dream));
            } else {
              r.json().then((err) => setErrors(err.errors));
            }
          })
          .then(setDreamFormData(initialFormState));
    }

    function handleChange(e) {
        setDreamFormData({
            ...dreamFormData,
            [e.target.name]: e.target.value,
        })
    }


  return (
    <div className="center">
      <div className="background">
        <div className="form-border center-content">
          <div className="ui grid">
            <form 
                className="ui two fields form center"
                onSubmit={(e) => handleSubmit(e)}
            >
              <label>Dream:</label>
              <input
                name="dream"
                type="text"
                id={FormData.dream}
                placeholder="ex. Visit Italy"
                value={dreamFormData.dream}
                onChange={(e) => handleChange(e)}
              />
              <label>Category:</label>
              <select
                name="category"
                // type="text"
                id={FormData.category}
                // placeholder="ex. Visit Italy"
                value={dreamFormData.category}
                onChange={(e) => handleChange(e)}
              >
                <option value="">Select a Category</option>
                <option value="1">Test 1</option>
                <option value="2">Test 2</option>
              </select>
              
              <label>Finish By:</label>
              <input
                name="due"
                type="date"
                id={FormData.due}
                value={dreamFormData.due}
                onChange={(e) => handleChange(e)}
              />
              <br></br>
              <div>
                {errors.map((error) => (
                  <ul key={error} className="errors">- {error}</ul>
                ))}
              </div>
              <br></br>
              <button className="ui submit button center" type="submit">Create</button>
              <br></br>
              <br></br>
            </form>
          </div>
        </div>
        <br></br>
      </div>
    </div>
  )
}

export default AddDreamForm

{/* <div class="field">
    <div class="ui checkbox">
        <input type="checkbox" class="hidden" readonly="" tabindex="0"/>
        <label>I agree to the Terms and Conditions</label>
    </div>
</div> */}

{/* <form class="ui form">
    <div class="equal width fields">
        <div class="field">
            <label>First name</label>
            <div class="ui fluid input">
                <input type="text" placeholder="First name"/>
            </div>
        </div>
        <div class="field">
            <label>Last name</label>
            <div class="ui fluid input">
                <input type="text" placeholder="Last name"/>
            </div>
        </div>
        <div class="field">
            <label>Gender</label>
            <div role="listbox" aria-expanded="false" class="ui fluid selection dropdown" tabindex="0">
                <div aria-atomic="true" aria-live="polite" role="alert" class="divider default text">Gender</div>
                <i aria-hidden="true" class="dropdown icon"></i>
                <div class="menu transition">
                    <div style="pointer-events:all" role="option" aria-checked="false" aria-selected="true" class="selected item">
                        <span class="text">Male</span>
                    </div>
                    <div style="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item">
                        <span class="text">Female</span>
                    </div>
                    <div style="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item">
                        <span class="text">Other</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="inline fields">
        <label>Size</label>
        <div class="field">
            <div class="ui radio checkbox">
                <input type="radio" class="hidden" readonly="" tabindex="0" value="sm"/>
                <label>Small</label>
            </div>
        </div>
        <div class="field">
            <div class="ui radio checkbox">
                <input type="radio" class="hidden" readonly="" tabindex="0" value="md"/>
                <label>Medium</label>
            </div>
        </div>
        <div class="field">
            <div class="ui radio checkbox">
                <input type="radio" class="hidden" readonly="" tabindex="0" value="lg"/>
                <label>Large</label>
            </div>
        </div>
    </div>
    <div class="field">
        <label>About</label>
        <textarea placeholder="Tell us more about you..." rows="3"></textarea>
    </div>
    <div class="field">
        <div class="ui checkbox">
            <input type="checkbox" class="hidden" readonly="" tabindex="0"/>
            <label>I agree to the Terms and Conditions</label>
        </div>
    </div>
    <div class="field">
        <button class="ui button">Submit</button>
    </div>
</form> */}