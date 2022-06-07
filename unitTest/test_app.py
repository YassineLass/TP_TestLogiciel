from unittest import TestCase, main
from app import comparenumber,get_secret,get_randomNumber,new_secret


class TestApp(TestCase):
	def test_comparenumber(self):
		assert comparenumber(5,1)==0
		assert comparenumber(1,5)==-1
		assert comparenumber(1,1)==1
	def test_get_secret(self):
		assert int == type(get_secret())
	def test_get_randomNumber(self):
		assert get_randomNumber(50)<51
		assert get_randomNumber(0)==-1
				
if __name__ == "__main__":
	main()		
