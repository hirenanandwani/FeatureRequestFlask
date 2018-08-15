from flaskdemo1 import db

class Features(db.Model):

	__table_args__ = {'extend_existing': True} 

        id = db.Column(db.Integer, primary_key=True)
        Title = db.Column(db.String(50))
        Description = db.Column(db.String(200))
        Client = db.Column(db.String(10))
        ProductArea = db.Column(db.String(20))
        Priority = db.Column(db.Integer)
        TargetDate = db.Column(db.String(30))


db.create_all()
db.session.commit()

