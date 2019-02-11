import ServiceActions from 'actions/service-actions';

class DBsActions extends ServiceActions {

    open(data){
        return super.method('open', data);
    }

    close(data){
        return super.method('close', data);
    }

    init(data){
        return super.method('init', data);
    }

    drop(data){
        return super.method('drop', data);
    }

    fill(data){
        return super.method('fill', data);
    }

    clear(data){
        return super.method('clear', data);
    }

}

export default new DBsActions('/api', 'dbs');