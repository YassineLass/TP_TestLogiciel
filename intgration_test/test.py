from app import create_app,get_secret
import pytest



@pytest.fixture(scope='module')
def test_client():
    flask_app = create_app(__name__)
    testing_client = flask_app.test_client(use_cookies=False)
    context = flask_app.app_context()
    context.push()
    yield testing_client
    context.pop()
    
    

def test_check_number(test_client):
	print("0000000000000000000000000000")
	request_payload = {
	"number": str(get_secret())
	}
	expected_body = {
			"result":"YES"
		}
	expected_status_code = 200
	
	res = test_client.post('/check',json=request_payload)
	
	assert expected_status_code == res.status_code
	assert  expected_body == res.json	

	 
